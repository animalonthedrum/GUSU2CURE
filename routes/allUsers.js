/* REQUIRES for userInfo.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

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
    console.log('allUsers url hit ');

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

});//end of get

router.put('/', function(req, res) {
	console.log('update url hit', req.body);
	res.send(200);

});//end of get

module.exports = router;
