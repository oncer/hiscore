var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/highscoreRoutes');
routes(app);

app.listen(port);

console.log('hiscore RESTful API server started on: ' + port);
