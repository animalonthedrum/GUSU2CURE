var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

app.use(express.static('public'));

app.listen(port, function() {
  console.log('Listening on port:', port);
}); //

app.get('/', function(req, res) {
  console.log('Main url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});
