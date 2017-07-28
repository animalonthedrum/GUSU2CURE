var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

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
	console.log('email', email);
	pool.connect().then(function(client) {
			  client.query("SELECT * FROM tbl_user WHERE email = '" + email + "';").then(function(userData) {
				client.release();
				res.send(userData.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});
});//end of get

module.exports = router;
