/* REQUIRES for injury.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
// var bcrypt = require('bcrypt');

/* USES for register.js */
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


// START GET for  newUserReg registration
router.get('/', function(req, res) {
	// START dB connection
	pool.connect(function(err, connection, done) {
		if (err) {
			res.send('pool connect err:', err);
		} else {
			connection.query("SELECT * FROM tbl_sci_cause ORDER BY id;")
			done();
			res.send('retrieved sci_cause')
		}
	})
});

// END POST newUserReg registration

/* EXPORTS for injury.js */
module.exports = router;
