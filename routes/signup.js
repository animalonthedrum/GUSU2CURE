var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();




router.post('/', function(req, res) {
    console.log('this url will signup a user');
    res.send(200);
});//


module.exports = router;
