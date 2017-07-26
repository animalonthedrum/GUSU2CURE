var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var login = require('./routes/login');
var sciMenu = require('./routes/sciMenu');
var userInfo = require('./routes/userInfo');
var register = require('./routes/register');
var allUsers = require('./routes/allUsers');


//uses
app.use(express.static('public'));
app.use('/sciMenu', sciMenu);
app.use('/register', register);
app.use('/login', login);
app.use('/userInfo', userInfo);
app.use('/allUsers', allUsers);


app.listen(port, function() {
	console.log('Listening on port:', port);
}); //

app.get('/', function(req, res) {
	console.log('Main url hit');
	res.sendFile(path.resolve('public/views/index.html'));
});
