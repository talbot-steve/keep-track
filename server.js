var mongoose = require('mongoose');
var config = require('./config');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
var port = 8787;

var athleteCtrl = require('./controllers/athleteCtrl');
var meetCtrl = require('./controllers/meetCtrl');
var resultCtrl = require('./controllers/resultCtrl');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get('/athlete', athleteCtrl.get);
app.post('/athlete', athleteCtrl.create);
app.put('/athlete/:id', athleteCtrl.update);
app.delete('/athlete', athleteCtrl.remove);

app.get('/meet', meetCtrl.get);
app.post('/meet', meetCtrl.create);
app.put('/meet/:id', meetCtrl.update);
app.delete('/meet', meetCtrl.remove);

app.get('/result', resultCtrl.get);
app.post('/result', resultCtrl.create);
app.put('/result/:id', resultCtrl.update);
app.delete('/result', resultCtrl.remove);

app.post('/stat/athlete_id/:athlete_id/result_id/:result_id', athleteCtrl.pushResultToUser);

mongoose.connect(config.mongoURI);

mongoose.connection.once("open", function () {
    console.log('Connected to Mongo at ' + config.mongoURI);
});

app.listen(port, function () {
    console.log('listening on port ', port);
});
