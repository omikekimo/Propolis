const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'debian-sys-maint', // Change this to your MySQL username
  password: 'bizDeTI0mx476kyS', // Change this to your MySQL password
  database: 'propolis' // Change this to your MySQL database name
});

/* GET worklife page. */
router.get('/', function(req, res, next) {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Access the username from the session
    const username = req.user.username;
    res.render('worklife', { title: 'Propolis', username: username });
  } else {
    // Handle the case when the user is not authenticated
    res.redirect('/register'); // Redirect to the register page or handle as appropriate
  }
});

// Inside your existing route handler for '/worklife' POST requests
router.post('/', (req, res, next) => {
  // Extract enterprise name from the request body
  const { enterpriseName } = req.body;

  // Check if enterprise name is provided
  if (!enterpriseName) {
    return res.status(400).send('Enterprise name is required');
  }

  // Query the database to check if the enterprise name already exists
  db.query('SELECT * FROM member_run_enterprises WHERE member_run_enterprise_name = ?', [enterpriseName], (err, results) => {
    if (err) {
      return next(err);
    }

    // If the enterprise name already exists, return an error
    if (results.length > 0) {
      return res.status(400).send('Enterprise name is already taken');
    }

    // Insert the new enterprise into the database
    db.query('INSERT INTO member_run_enterprises (member_run_enterprise_name, creation_datetime, member_id) VALUES (?, NOW(), ?)', [enterpriseName, req.user.member_id], (err, result) => {
      if (err) {
        return next(err);
      }

      res.redirect('/worklife'); // Redirect to the worklife page after successful insertion
    });
  });
});


module.exports = router;

