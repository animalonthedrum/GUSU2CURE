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
	var matchAgeMin = userAge - Math.ceil(userAge - ((userAge / 2) + 7));
	var matchAgeMax = userAge + Math.ceil(userAge - ((userAge / 2) + 7));
	var matchGender = req.body.gender;
	var matchSciAge = req.body.sci_age;
	var matchSciAgeMin = matchSciAge - Math.ceil(matchSciAge - ((matchSciAge / 2) + 7));
	var matchSciAgeMax = matchSciAge + Math.ceil(matchSciAge - ((matchSciAge / 2) + 7));
	var matchUserZIP = req.body.zip.slice(0, 2) + '%';
	console.log('email', matchUserEmail);
	console.log('matchUserType', matchUserType);
	console.log('userAge', userAge);
	console.log('matchAgeMin', matchAgeMin);
	console.log('matchAgeMax', matchAgeMax);
	console.log('matchGender', matchGender);
	console.log('matchSciAge', matchSciAge);
	console.log('matchSciAgeMin', matchSciAgeMin);
	console.log('matchSciAgeMax', matchSciAgeMax);
	console.log('matchUserZIP', matchUserZIP);

	pool.connect().then(function(client) {
		client.query("SELECT * FROM main_matview WHERE access_lvl != '" + matchUserType + "' AND access_lvl != 'Admin' AND age BETWEEN '" + matchAgeMin + "' AND '" + matchAgeMax + "' AND sci_age BETWEEN '" + matchSciAgeMin + "' AND '" + matchSciAgeMax + "' AND zip LIKE '" + matchUserZIP + "' AND matched = 'FALSE' AND email !='" + matchUserEmail + "' LIMIT 3;").then(function(matchData) {
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
