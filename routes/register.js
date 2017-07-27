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
							var email = req.body.login.email;
							var dateCreated = req.body.hobbies.dateStamp;
							var accessLvl = req.body.signup.typeOfUser;
							var enabled = true;
							var first = req.body.login.firstName;
							var last = req.body.login.lastName;
							var dob = req.body.signup.dob;
							var gender = req.body.signup.gender;
							var phone = req.body.signup.phone;
							var phoneType = req.body.signup.phoneType;
							var street = req.body.signup.address;
							var city = req.body.signup.city;
							var state = req.body.signup.state;
							var zip = req.body.signup.zip;
							// var visit_pref;
							var sci_rel = req.body.injury.sciRel.id;
							var sci_cause = req.body.injury.cause.id;
							var sci_age = req.body.injury.injAge;
							var sci_lvl = req.body.injury.level;
							var asia = req.body.injury.asia;
							var mobility = req.body.injury.mobility;
							var trans_type = req.body.injury.trans_type.id;
							var rel_status = req.body.bio.relStatus.id;
							var fam_status = req.body.bio.famStatus;
							var ed_lvl = req.body.bio.edLevel;
							// var emp;
							var lang = req.body.bio.lang.id;
							var pets = req.body.bio.pets;
							var hobbies = req.body.hobbies.hobbies;
							var questions = req.body.question.question;
							var experience = req.body.question.experience;
							var additional = req.body.question.additional;
							var comments = req.body.question.comment;
							var heardAbout = req.body.question.heardAbout;
							var password = hash;
							// END query variables

							// START INSERT query
							connection.query("INSERT INTO tbl_user (email, date_created, access_lvl, enabled, first_name, last_name, password, dob, gender, phone, phone_type, street, city, state, zip, sci_age, sci_lvl, asia_score, mobility_req, fam_status, ed_lvl, pets, questions, experience, additional, comments, sci_relation, sci_cause, lang, trans_type, rel_status, hobbies) VALUES ('" + email + "','" + dateCreated + "','" + accessLvl + "','" + enabled + "','" + first + "','" + last + "','" + password + "','" + dob + "','" + gender + "','" + phone + "','" + phoneType + "','" + street + "','" + city + "','" + state + "','" + zip + "','" + sci_age + "','" + sci_lvl + "','" + asia + "','" + mobility + "','" + fam_status + "','" + ed_lvl + "', '" + pets + "','" + questions + "','" + experience + "','" + additional + "','" + comments + "','" + sci_rel + "','" + sci_cause + "', '" + lang + "','" + trans_type + "','" + rel_status + "','" + hobbies + "');")
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
