var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 5000 ;


app.use('/', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});



app.listen(PORT, '0.0.0.0', function() {
console.log(`Listening on Port ${PORT}`);
});