var bcrypt = require('bcrypt');
var LocalStrategy=require('passport-local').Strategy;
var passport = require('passport');
var pg = require('pg');
var session = require('express-session');

// passport.use(session({
//    secret: 'secret',
//    key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
//    resave: 'true',
//    saveUninitialized: false,
//    cookie: { maxage: 60000, secure: false }
// }));


var config = {
	database: 'db_gusu',
	host: 'localhost',
	port: '5432',
	max: 20
};

var pool = new pg.Pool(config);



passport.use('local', new LocalStrategy({
  passReqToCallback: true,
  usernameField: 'email',
  passwordField: 'password'
}, function(req, email, password, done) {
	console.log('djfhasldfjhalskdjfhals');
  pool.connect(function(err, client, release) {
    console.log('called local - pg');

    // assumes the username will be unique, thus returning 1 or 0 results
    client.query("SELECT * FROM tbl_user WHERE email='" + email + "';",
      function(err, result) {
        var user = {};


        // Handle Errors
        if (err) {
          console.log('connection err ', err);
          done(null, user);
        }

        release();

        if (result.rows[0] != undefined) {
          user = result.rows[0];
          console.log('User obj', user);

          // Hash and compare
          var firstName = result.rows[0].first_name;
            var lastName = result.rows[0].last_name;
            var userEmail = result.rows[0].email;
            // Password returned from dB
            var pwHashed = result.rows[0].password;

          bcrypt.compare(password, pwHashed, function(err, isMatch) {
                if (err) {
                    res.send('Passwords do not match');
                    done(null, false, {
                      message: 'Incorrect credentials.'
                    });

                } else {
                    if (isMatch === false) {
                        done(null, false, {
                          message: 'Incorrect credentials.'
                        });
                    } else if (isMatch) {
						console.log('the user matches');
                        done(null, user);

                    }
                }
            });

        } else {
          console.log('no user');
          done(null, false);
        }

      });
  });
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  pool.connect(function(err, client, release) {
    if (err) {
      console.log('connection err ', err);
      release();
      done(err);
    }

    var user = {};

    client.query("SELECT * FROM tbl_user WHERE id = $1", [id], function(err, result) {
      // Handle Errors
      if (err) {
        console.log('query err ', err);
        done(err);
        release();
      }
      user = result;
      release();

      if (!user) {
        // user not found
        return done(null, false, {
          message: 'Incorrect credentials.'
        });
      } else {
        // user found
        done(null, user);
      }

    });
  });
});

module.exports = passport;
