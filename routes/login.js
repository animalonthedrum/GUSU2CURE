var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');
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


router.post('/', function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    // pool.connect(function(err, connection, done) {
    //     if (err) {
    //         done();
    //         res.send(500);
    //     }//end of if
    //     else {
    //         connection.query("SELECT * FROM tbl_user WHERE email = $1;", [email]),
    //         function (err, result) {
    //                 if (err) {
    //
    //                 }
    //         };
    //     }//end of else
    // });//end of pool connect

    res.send(200);
});//


module.exports = router;
