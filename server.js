var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config');

var athleteCtrl = require('./controllers/athleteCtrl');
var meetCtrl = require('./controllers/meetCtrl');
var resultCtrl = require('./controllers/resultCtrl');
var UserCtrl = require('./controllers/UserCtrl');

var passport = require('./services/passport');

var isAuthed = function(req, res, next){
	if(!req.isAuthenticated()) return res.sendStatus(401);
	return next();
};

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));


app.use(session({ secret: 'best secret ever' }));
app.use(passport.initialize());
app.use(passport.session());

//-----login
app.post('/login', passport.authenticate('local', { failureRedirect: '/login'}), function(req, res) {
	console.log(12121212121, req.body);
	res.json(req.user);
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

//-----endpoints for users
app.get('/users', UserCtrl.findAll);
app.get('/user', function(req, res){
	res.json(req.user)
});
app.get('/sessionUser', UserCtrl.me);
app.post('/users', UserCtrl.create);
app.put('/users/:id', UserCtrl.update);
app.delete('/users/:id', UserCtrl.delete);

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

//get authorized user
app.get('/user/auth', function(req, res) {
    if (req.user) {
        res.send(req.user)
    }
    res.end()
})

var mongoURI = config.MONGO_URI;
if (config.ENV == 'DEVELOPMENT') {
    var port = 8787;
} else {
    var port = 80;
}

mongoose.connect(mongoURI);

mongoose.connection.once("open", function () {
    console.log('Connected to Mongo at ' + mongoURI);
});

app.listen(port, function () {
    console.log('listening on port ', port);
});
