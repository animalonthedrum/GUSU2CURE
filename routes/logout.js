var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport = require('../strategies/user.strategy');


router.get('/', function(req, res) {
    console.log('Loging out', req.user);
    req.logout();
    res.send(200);
});//


module.exports = router;
