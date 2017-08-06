var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var passport = require('../strategies/user.strategy');

router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

var config = {
  database: 'db_gusu',
  host: 'localhost',
  port: '5432',
  max: 20
};

var pool = new pg.Pool(config);


router.post('/', function(req, res) {
    console.log('req.boud', req.body.email);

    pool.connect().then(function(client) {
        client.query("DELETE  FROM tbl_user WHERE email =  $1;", [req.body.email]);

        client.query("REFRESH MATERIALIZED VIEW main_matview;").then(function(useData) {
            client.release();
            res.send(req.user);
        });



      })
      .catch(function(err) {
        client.release();
        res.sendStatus(500);
      });


});//end of post

module.exports = router;
