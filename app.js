const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const createError = require('http-errors');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const membersRouter = require('./routes/members');
const aboutRouter = require('./routes/about');
const registerRouter = require('./routes/register');
const worklifeRouter = require('./routes/worklife');
const personalRouter = require('./routes/personal');
const communicationRouter = require('./routes/communication');
const marketplaceRouter = require('./routes/marketplace');
const financeRouter = require('./routes/finance');

const app = express();

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'debian-sys-maint', // Change this to your MySQL username
  password: 'bizDeTI0mx476kyS', // Change this to your MySQL password
  database: 'propolis' // Change this to your MySQL database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
    secret: 'your_secret_key', // Change this to a secret key
    resave: false,
    saveUninitialized: false
}));

// Flash middleware
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define local strategy for authentication
passport.use(new LocalStrategy(
    (username, password, done) => {
        // Query the database to find the user with the given username
        db.query('SELECT * FROM members WHERE username = ?', [username], (err, results) => {
            if (err) { return done(err); }
            if (results.length === 0) { return done(null, false, { message: 'Incorrect username.' }); }
            const user = results[0];
            // Compare the hashed password with the password provided
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) { return done(err); }
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect password.' });
                }
            });
        });
    }
));

// Serialize user object
passport.serializeUser((user, done) => {
    done(null, user.member_id);
});

// Deserialize user object
passport.deserializeUser((id, done) => {
    db.query('SELECT * FROM members WHERE member_id = ?', [id], (err, results) => {
        if (err) { return done(err); }
        const user = results[0];
        done(null, user);
    });
});

app.use('/about', aboutRouter);
app.use('/', indexRouter);
app.use('/members', membersRouter);
app.use('/register', registerRouter);
app.use('/worklife', worklifeRouter);
app.use('/personal', personalRouter);
app.use('/communication', communicationRouter);
app.use('/marketplace', marketplaceRouter);
app.use('/finance', financeRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

