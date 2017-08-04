var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var login = require('./routes/login');
var menuSciRel = require('./routes/menuSciRel');
var menuSciCause = require('./routes/menuSciCause');
var menuTransType = require('./routes/menuTransType');
var menuRelStatus = require('./routes/menuRelStatus');
var viewMatchNonMatched = require('./routes/viewMatchNonMatched');
var matching = require('./routes/matching');
var menuLang = require('./routes/menuLang');
var userInfo = require('./routes/userInfo');
var register = require('./routes/register');
var allUsers = require('./routes/allUsers');
var userSearched = require('./routes/userSearch');
var index = require('./routes/index');
var logout = require('./routes/logout');
var bodyparser = require('body-parser');
var passport = require('./strategies/user.strategy');
var session = require('express-session');
var userBio = require('./routes/userBio.js');
//uses
app.use(express.static('public'));

app.use(bodyparser.json());


app.use(session({
	secret: 'secret',
	key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
	resave: 'true',
	saveUninitialized: false,
	cookie: {
		maxage: 60000,
		secure: false
	}
}));

app.use(passport.initialize());
app.use(passport.session());




// start up passport sessions

app.use('/menuSciRel', menuSciRel);
app.use('/matching', matching);
app.use('/menuSciCause', menuSciCause);
app.use('/menuTransType', menuTransType);
app.use('/menuRelStatus', menuRelStatus);
app.use('/menuLang', menuLang);
app.use('/viewMatchNonMatched', viewMatchNonMatched);
app.use('/register', register);
app.use('/login', login);
app.use('/userInfo', userInfo);
app.use('/allUsers', allUsers);
app.use('/userSearch', userSearched);
app.use('/', index);
app.use('/logout', logout);
app.use('/userBio', userBio);

app.listen(port, function() {
	console.log('Listening on port:', port);
}); //
