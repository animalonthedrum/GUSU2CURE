/* REQUIRES for userInfo.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var passport = require('../strategies/user.strategy');


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

// START getUserInfo
router.post('/', function(req, res) {
	var email = req.body.email;

	if (req.isAuthenticated()) {
		pool.connect().then(function(client) {
				client.query("SELECT email, tbl_access_lvl.access_lvl, first_name, last_name, dob, gender, phone, phone_type, street, city, state, zip, tbl_visit_pref.visit_pref, tbl_sci_rel.sci_rel, tbl_sci_cause.sci_cause, sci_age, sci_lvl, asia_score, mobility_req, tbl_trans_type.trans_type, tbl_rel_status.rel_status, fam_status, ed_lvl, emp_work, tbl_lang.lang, pets, hobbies, questions, experience, additional, heard_about FROM tbl_user LEFT JOIN tbl_access_lvl ON tbl_access_lvl.id = tbl_user.access_lvl LEFT JOIN tbl_lang ON tbl_lang.id = tbl_user.lang LEFT JOIN tbl_rel_status ON tbl_rel_status.id = tbl_user.rel_status LEFT JOIN tbl_sci_cause ON tbl_sci_cause.id = tbl_user.sci_cause LEFT JOIN tbl_sci_rel ON tbl_sci_rel.id = tbl_user.sci_relation LEFT JOIN tbl_trans_type ON tbl_trans_type.id = tbl_user.trans_type LEFT JOIN tbl_visit_pref ON tbl_visit_pref.id = tbl_user.visit_pref WHERE email = '" + email + "'").then(function(userData) {
				});

				client.query("REFRESH MATERIALIZED VIEW main_matview;")

				client.query("SELECT * FROM main_matview where email = $1;",[email]).then(function(userData) {
				  client.release();
				  console.log(userData.rows[0]);
				  res.send(userData);
				})
			})

			.catch(function(err) {
				client.release();
				res.sendStatus(500);
			});



	} else {
		res.send(403)
	}

});
// END getUserInfo

// START getAllUserInfo
router.get('/', function(req, res) {
	pool.connect().then(function(client) {
			client.query("SELECT email, tbl_access_lvl.access_lvl, first_name, last_name, dob, gender, phone, phone_type, street, city, state, zip, tbl_visit_pref.visit_pref, tbl_sci_rel.sci_rel, tbl_sci_cause.sci_cause, sci_age, sci_lvl, asia_score, mobility_req, tbl_trans_type.trans_type, tbl_rel_status.rel_status, fam_status, ed_lvl, emp_work, tbl_lang.lang, pets, hobbies, questions, experience, additional, heard_about FROM tbl_user LEFT JOIN tbl_access_lvl ON tbl_access_lvl.id = tbl_user.access_lvl LEFT JOIN tbl_lang ON tbl_lang.id = tbl_user.lang LEFT JOIN tbl_rel_status ON tbl_rel_status.id = tbl_user.rel_status LEFT JOIN tbl_sci_cause ON tbl_sci_cause.id = tbl_user.sci_cause LEFT JOIN tbl_sci_rel ON tbl_sci_rel.id = tbl_user.sci_relation LEFT JOIN tbl_trans_type ON tbl_trans_type.id = tbl_user.trans_type LEFT JOIN tbl_visit_pref ON tbl_visit_pref.id = tbl_user.visit_pref").then(function(allUserData) {
				client.release();
			});


			client.query("REFRESH MATERIALIZED VIEW main_matview;")

			client.query("SELECT * FROM main_matview").then(function(userData) {
	          client.release();
	          console.log(userData.rows.age);
	          res.send(userData.rows);
	        });


		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});

		client.query("REFRESH MATERIALIZED VIEW main_matview;")

		client.query("SELECT * FROM main_matview").then(function(userData) {
          client.release();
          console.log(userData.rows.age);
          res.send(userData.rows);
        });


});
// END getAllUserInfo

router.put('/', function(req, res) {
	console.log(req.body);
	console.log('this is the user', req.user);
	var user = req.user.rows[0].email
		pool.connect().then(function(client) {
				client.query("UPDATE tbl_user set image = $1 where email = $2;", [req.body.imagePic, user]).then(function(allUserData) {
					client.release();
					res.send(req.user);
				});
			})
			.catch(function(err) {
				client.release();
				res.sendStatus(500);
			});

});
// END getAllUserInfo


/* EXPORTS for userInfo.js */
module.exports = router;
