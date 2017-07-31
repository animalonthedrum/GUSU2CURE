var express = require('express');
var router = express.Router();
var localStrategy = require('passport-local').Strategy;
var passport = require('../strategies/user.strategy');
var path = require('path');


router.post('/', passport.authenticate('local'),  function(req, res) {
    console.log(req.isAuthenticated());

        res.send(req.user);


});


// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
