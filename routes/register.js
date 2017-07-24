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
							// START query variables
							var first = req.body.login.firstName;
							var last = req.body.login.lastName;
							var email = req.body.login.email;
							var password = hash;
							var dob = req.body.signup.dob;
							var gender = req.body.signup.gender;
							var phone = req.body.signup.phone;
							var phoneType = req.body.signup.phoneType;
							var street = req.body.signup.address;
							var city = req.body.signup.city;
							var state = req.body.signup.state;
							var zip = req.body.signup.zip;
							var sci_cause = req.body.signup.cause;
							var rel_status = req.body.bio.relStatus;
							var lang = req.body.bio.lang;
							var sci_year = req.body.injury.yrInjury;
							var asia = req.body.injury.asia;
							// END query variables

							// START INSERT query
							connection.query("INSERT INTO tbl_user (email, enabled, first_name, last_name, dob, gender, phone, phone_type, street, city, state, zip, sci_year, asia_score) VALUES ('" + email + "', TRUE, '" + first + "', '" + last + "', '" + dob + "', '" + gender + "', '" + phone + "', '" + phoneType + "', '" + street + "', '" + city + "', '" + state + "', '" + zip + "','" + sci_year + "','" + asia + "');")
							// END INSERT query

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
