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


router.put('/', function(req, res) {
	console.log('this is the email', req.user.rows[0].email);
	var userEmail = req.user.rows[0].email; // logged-in user email
	var email = req.body.Email // email of person user matched with

	pool.connect().then(function(client) {
			// client.query("UPDATE tbl_user SET matched_with = $1 WHERE email = $2;",[email ,userEmail]);
			client.query("UPDATE tbl_user SET matched_with = $1, matched = TRUE WHERE email = $2;", [email, userEmail])
			client.query("UPDATE tbl_user SET matched_with = $1, matched = TRUE WHERE email = $2;", [userEmail, email])
			// START REFRESH MATERIALIZED VIEW query
			client.query("REFRESH MATERIALIZED VIEW main_matview;").then(function(userData) {
				client.release();
				res.sendStatus(200);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});

}); //

/* Exports for viewMatchNonMatched */
module.exports = router;
