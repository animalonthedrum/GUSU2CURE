var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var passport = require('../strategies/user.strategy');
router.use(bodyParser.urlencoded({
	extended: true
}));

router.use(bodyParser.json());

var config = {
	database: 'db_gusu',
	host: 'localhost',
	port: '5432',
	max: 20
};

var pool = new pg.Pool(config);

router.get('/:email', function(req, res) {
    var email = req.params.email;

	if (req.isAuthenticated()) {
		console.log('email', email);
		pool.connect().then(function(client) {
				  client.query("SELECT * FROM tbl_user WHERE email = '" + email + "';")

				  client.query("REFRESH MATERIALIZED VIEW main_matview;")
				  // START REFRESH MATERIALIZED VIEW query
				  client.query("SELECT * FROM main_matview where email = $1;",[email] ).then(function(userData) {
					client.release();
					console.log(userData.rows.age);
					res.send(userData.rows);
				  });
			})
			.catch(function(err) {
				client.release();
				res.sendStatus(500);
			});
	} else {
		res.sendStatus(403)
	}


});//end of get

module.exports = router;
