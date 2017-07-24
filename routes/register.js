/* REQUIRES for register.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

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

// START POST newUserReg registration
router.post('/', function(req, res) {
	// START dB connection
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.send('pool connect err:', err);
		} else {
			// START salt generation
			bcrypt.genSalt(12, function(err, salt) {
				if (err) {
					console.log('getSalt err:', err);
				} else {
					// START hash generation
					bcrypt.hash(req.body.login.password, salt, function(err, hash) {
						// START INSERT new user query
						if (err) {
							res.send('hash gen err:', err);
						} else {
							var first = req.body.login.firstName;
							var last = req.body.login.lastName;
							var email = req.body.login.email;
							var password = hash;
							connection.query("INSERT INTO tbl_user (first_name, last_name, email, password) VALUES ('" + first + "', '" + last + "','" + email + "','" + password + "');");
							done();
							res.send('user created');
						}
					}) // END INSERT user user query
				}
			}) // END salt generation
		}
	}) // END dB connection
})
// END POST newUserReg registration

/* EXPORTS for register.js */
module.exports = router;
