/* REQUIRES for matching.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.use(bodyParser.json());

/* dB Config */
var config = {
	database: 'db_gusu',
	host: 'localhost',
	port: '5432',
	max: 20
};

var pool = new pg.Pool(config);




var asia = asia;




// START GET matchingUsers
router.post('/', function(req, res) {
	var matchUserType = req.body.type;
	// var matchAgeX = userAge - Math.ceil(userAge - ((userAge / 1.75) + 7));
	// var matchAgeY = userAge + Math.ceil(userAge - ((userAge / 1.75) + 7));
	var matchSciAge = req.body.sci_age;
	var matchUserZIP = req.body.zip.slice(0, 3) + '%';

	console.log('matchUserType:', matchUserType);
	// console.log('matchAgeX:', matchAgeX);
	// console.log('matchAgeY:', matchAgeY);
	console.log('matchSciAge:', matchSciAge);
	console.log('matchUserZIP:', matchUserZIP);
	pool.connect().then(function(client) {
		client.query("SELECT * FROM tbl_user;").then(function(matchData) {
			client.release();
			res.send(matchData.rows);
		});
	}).catch(function(err) {
		client.release();
		res.sendStatus(500);
	});
	// res.sendStatus(200);
});
// END GET matchingUsers

/* Exports for matching */
module.exports = router;
