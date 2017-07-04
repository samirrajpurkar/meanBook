var express = require('express');
var app = express();

app.use('/', function (req, res){
  console.log();
  res.send("First App....");
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

// return the application object namely app
module.exports = app;
