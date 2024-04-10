const express = require('express');
const router = express.Router();

/* GET worklife page. */
router.get('/', function(req, res, next) {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Access the username from the session
    const username = req.user.username;
    res.render('marketplace', { title: 'Propolis', username: username });
  } else {
    // Handle the case when the user is not authenticated
    res.redirect('/register'); // Redirect to the register page or handle as appropriate
  }
});

module.exports = router;

