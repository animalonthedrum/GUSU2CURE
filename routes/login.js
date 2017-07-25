var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

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

// START user login
router.post('/', function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	// START pool.connect
	pool.connect(function(err, connection, done) {
		if (err) {
			console.log('pool.connection err:', err);
			done();
			res.send(400);
		} else {
			// START query to match email/password
			connection.query("SELECT * FROM tbl_user WHERE email='" + email + "';",
				function(err, result) {
					if (err) throw err;
					// START check email
					if (result.rows[0] == undefined) {
						res.send('Not in system')
					} else {
						var firstName = result.rows[0].first_name;
						var lastName = result.rows[0].last_name;
						var userEmail = result.rows[0].email;
						// Password returned from dB
						var pwHashed = result.rows[0].password;
						// START bcrypt compare password to hashed password
						bcrypt.compare(password, pwHashed, function(err, isMatch) {
							if (err) {
								res.send('Passwords do not match')
							} else {
								if (isMatch === false) {
									done();
									res.sendStatus(401);
								} else if (isMatch) {
									done();
									res.send(result.rows)
								}
							}
						})
					}
				})
		}
	})
})

module.exports = router;
