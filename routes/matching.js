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
	var matchUserEmail = req.body.email;
	var matchUserType = req.body.type;
	var userAge = req.body.age;
	var matchAgeX = userAge - Math.ceil(userAge - ((userAge / 1.75) + 7));
	var matchAgeY = userAge + Math.ceil(userAge - ((userAge / 1.75) + 7));
	var matchGender = req.body.gender;
	var matchSciAge = req.body.sci_age;
	var matchSciAgeX = (req.body.sci_age - 5);
	var matchSciAgeY = (req.body.sci_age + 5);
	var matchUserZIP = req.body.zip.slice(0, 2) + '%';
	console.log('email', matchUserEmail);
	console.log('matchUserType', matchUserType);
	console.log('userAge', userAge);
	console.log('matchAgeX', matchAgeX);
	console.log('matchAgeY', matchAgeY);
	console.log('matchGender', matchGender);
	console.log('matchSciAge', matchSciAge);
	console.log('matchSciAgeX', matchSciAgeX);
	console.log('matchSciAgeY', matchSciAgeY);
	console.log('matchUserZIP', matchUserZIP);

	pool.connect().then(function(client) {
		client.query("SELECT * FROM main_matview WHERE access_lvl != '" + matchUserType + "' AND access_lvl != 'Admin' AND age BETWEEN '" + matchAgeX + "' AND '" + matchAgeY + "' AND gender = '" + matchGender + "' AND sci_age BETWEEN '" + matchSciAgeX + "' AND '" + matchSciAgeY + "' AND zip LIKE '" + matchUserZIP + "' AND matched = 'FALSE' AND email !='" + matchUserEmail + "' LIMIT 3;").then(function(matchData) {
			client.release();
			console.log('matchData', matchData.rows);
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
