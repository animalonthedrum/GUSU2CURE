var express = require('express');
var router = express.Router();
var localStrategy = require('passport-local').Strategy;
var passport = require('../strategies/user.strategy');
var path = require('path');


router.post('/', passport.authenticate('local'),  function(req, res) {
    console.log(req.isAuthenticated());

        res.send(req.user);


});

router.put('/', function(req, res){
    console.log('Loging out');
    req.logout();
    res.send(200);
});//end pf put


// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
