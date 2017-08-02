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

// START GET matchingUsers
router.post('/', function(req, res) {
	// User Information
	var userEmail = req.body.email;
	var userType = req.body.type;
	var userAge = req.body.age;
	var userGender = req.body.gender;
	var userLang = req.body.lang;
	var userASIA = req.body.asia;
	var userZIP = req.body.zip;
	var userSCILvl = req.body.sci_lvl;
	var userSCIAge = req.body.sci_age;

	// Matching Parameters
	var matchAgeMin = userAge - Math.ceil(userAge - ((userAge / 2) + 8));
	var matchAgeMax = userAge + Math.ceil(userAge - ((userAge / 2) + 8));
	var matchGender = userGender;
	var matchLang = userLang;
	var matchASIA = userASIA;
	var matchZIP = userZIP.slice(0, 3) + '%';
	var matchSCILvl = userSCILvl;
	var matchSCIAgeMin = parseInt(userSCIAge) - Math.ceil(userSCIAge - ((userSCIAge / 2) + 8));
	var matchSCIAgeMax = parseInt(userSCIAge) + Math.ceil(userSCIAge - ((userSCIAge / 2) + 8));


	pool.connect().then(function(client) {
		client.query("SELECT * FROM main_matview WHERE access_lvl != '" + userType + "' AND access_lvl != 'Admin' AND age BETWEEN '" + matchAgeMin + "' AND '" + matchAgeMax + "' AND gender = '" + matchGender + "'AND lang = '" + matchLang + "' AND asia_score = '" + matchASIA + "' AND zip LIKE '" + matchZIP + "' AND sci_age BETWEEN '" + matchSCIAgeMin + "' AND '" + matchSCIAgeMax + "' AND matched = 'FALSE' AND email !='" + userEmail + "' LIMIT 3;").then(function(matchData) {
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
