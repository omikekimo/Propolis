// routes/register.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'debian-sys-maint', // Change this to your MySQL username
  password: 'bizDeTI0mx476kyS', // Change this to your MySQL password
  database: 'propolis' // Change this to your MySQL database name
});

// Route to render the registration form
router.get('/', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Route to handle registration form submission
router.post('/', (req, res, next) => {
  const { username, password, confirm_password } = req.body;

  // Check if passwords match
  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  // Check if username already exists
  db.query('SELECT * FROM members WHERE username = ?', [username], (err, results) => {
    if (err) {
      return next(err);
    }

    // If username already exists, return an error
    if (results.length > 0) {
      return res.status(400).send('Username already exists');
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return next(err);
      }

      // Insert the user into the database
      db.query('INSERT INTO members (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
          return next(err);
        }

        res.redirect('/'); // Redirect to the home page after successful registration
      });
    });
  });
});


module.exports = router;
