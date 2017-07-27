var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.use(bodyParser.json());


router.get('/:email', function(req, res) {
    var email = req.params;
    console.log(email);
    res.send(200);
});//end of get

module.exports = router;
