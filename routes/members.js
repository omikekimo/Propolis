var express = require('express');
var router = express.Router();
var passport = require('passport'); // Add this line to require Passport

/* POST user login. */
router.post('/', passport.authenticate('local', {
  successRedirect: '/members', // Change this to wherever you want to redirect after successful login
  failureRedirect: '/register', // Change this to the login page or wherever you want to redirect after failed login
  failureFlash: true // Enable flash messages for failed login attempts
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Get the username from the session if available
  var username = req.user ? req.user.username : null;
  // Render the users page with the username
  res.render('members', { title: 'Propolis', username: username });
});

/* GET worklife section. */
router.get('/worklife', function(req, res, next) {
  // Get the username from the session if available
  var username = req.user ? req.user.username : null;
  // Render the worklife page with the username
  res.render('worklife', { title: 'Working With Propolis', username: username });
});

module.exports = router;

