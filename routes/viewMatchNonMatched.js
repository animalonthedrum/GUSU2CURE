/* REQUIRES for viewMatchNonMatched.js */
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

// START GET viewMatchNonMatched
router.get('/', function(req, res) {
	console.log('viewMatchNonMatched ');
	var userType;
	var matchedType;
	pool.connect().then(function(client) {
			client.query("SELECT CONCAT(first_name,' ',last_name) AS Name, access_lvl AS Type FROM tbl_user WHERE access_lvl NOT IN ('" + userType + "', '3') AND matched = '" + matchedType + "';").then(function(userData) {
				client.release();
				res.send(userData.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});

});
// END GET viewMatchNonMatched

/* Exports for viewMatchNonMatched */
module.exports = router;
