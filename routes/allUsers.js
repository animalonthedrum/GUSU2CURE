
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
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

router.get('/', function(req, res) {
	console.log('allUsers url hit ', req.isAuthenticated());
	if (req.isAuthenticated()) {
		pool.connect().then(function(client) {
				client.query("SELECT * FROM tbl_user").then(function(userData) {
					client.release();
					res.send(userData.rows);
				});
			})
			.catch(function(err) {
				client.release();
				res.sendStatus(500);
			});
	} else {
		console.log('not authenticated');
		res.sendStatus(403)
	}


}); //end of get

// START PUT userEnableDisable
router.put('/', function(req, res) {
	var email = req.body.email;
	var enabled = req.body.enabled;
	if (req.isAuthenticated() ) {
		console.log('enabled status sent:', enabled);
		if (enabled == true) {
			pool.connect().then(function(client) {
				client.query("UPDATE tbl_user SET enabled = true WHERE email = '" + email + "';").then(function() {
					client.release();
					res.sendStatus(200);
				})
			})
		} else if (enabled == false) {
			pool.connect().then(function(client) {
					client.query("UPDATE tbl_user SET enabled = false WHERE email = '" + email + "';").then(function() {
						client.release();
						res.sendStatus(200);
					})
				})
				.catch(function(err) {
					client.release();
					res.sendStatus(403);
				});
		}
	} else if (req.isAuthenticated() === false) {
		console.log('not authenticated');
		res.sendStatus(403)
	}

});
// END PUT userEnableDisable

module.exports = router;
