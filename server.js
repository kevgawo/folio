var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 5000 ;


app.use('/', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});



app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 5000");
});