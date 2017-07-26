/* REQUIRES for menuTransType.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');


/* USES for menuTransType.js */
router.use(bodyParser.urlencoded({
	extended: true
}));

router.use(bodyParser.json());

/* CONFIG POOL */
var config = {
	database: 'db_gusu',
	host: 'localhost',
	port: '5432',
	max: 20
};

var pool = new pg.Pool(config);

// START GET menuTransType
router.get('/', function(req, res) {
	pool.connect().then(function(client) {
			client.query("SELECT * FROM tbl_trans_type ORDER BY id;").then(function(transType) {
				client.release();
				res.send(transType.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});
});
// END GET menuTransType

/* EXPORTS for menuTransType.js */
module.exports = router;
