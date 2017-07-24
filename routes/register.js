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

var pool - new pg.Pool(config);

// START POST newUserReg registration
router.post('/', function(req, res) {
	// START connection to dB
	pool.connect(function(err, commection, done) {
		if (err) {
			done();
			res.sendStatus(400)
		} else {
			// START salt generation
			bcrypt.genSalt(12, function(err, salt) {
				if (err) {
					console.log('genSalt error:', err);
				} else {
					// START hash generation
					bcrypt.hash(req.body.password, salt, function(err, hash) {
						// START INSERT new user into dB
						if (err) {
							res.sendStatus(400);
						} else {
							var first = req.body.
						}
					})
				}
			})
		}
	})
})
