/* REQUIRES for sciMenu.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');


/* USES for userInfo.js */
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

// START sciRelMenu
router.get('/', function(req, res) {
	pool.connect().then(function(client) {
			client.query("SELECT * FROM tbl_sci_rel ORDER BY id;").then(function(sciRel) {
				client.release();
				res.send(sciRel.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});
});
// END sciRelMenu

/* EXPORTS for sciMenu.js */
module.exports = router;
