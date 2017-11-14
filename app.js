// Require application Modules
// --------------------------------------------------------------------------------------------
var express = require('express');
var app     = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/angular-app.html'));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ',  port);
