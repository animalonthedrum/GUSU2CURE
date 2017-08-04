var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var passport = require('../strategies/user.strategy');


var config = {
  database: 'db_gusu',
  host: 'localhost',
  port: '5432',
  max: 20
};

var pool = new pg.Pool(config);



router.put('/', function(req, res) {
    console.log('req', req.body);

        pool.connect().then(function(client) {
            // START REFRESH MATERIALIZED VIEW query
            client.query("REFRESH MATERIALIZED VIEW main_matview;");
            // START REFRESH MATERIALIZED VIEW query
            client.query("UPDATE tbl_user SET user_bio = $1 WHERE email = $2",[req.body.Bio, req.user.rows[0].email]).then(function(userData) {
              client.release();
              res.send(userData.rows);
            });
          })
          .catch(function(err) {
            client.release();
            res.sendStatus(500);
          });


});

module.exports = router;
