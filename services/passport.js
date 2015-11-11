var LocalStrategy = require('passport-local').Strategy;

var userModel = require('../models/UserModel.js');

module.exports = function (passport) {
    passport.serializeUser (function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser (function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        if (email) email = email.toLowerCase();
        User.findOne({'local.email' : email}, function (err, user) {
            if (err) return done(err);
            if (!user) return done(null, false);
            if (!user.validPassword(password)) return done(null, false);
            return done(null, user);
        });
    }));
    
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
        },
        function(req, email, password, done) {
            if (email) email = email.toLowerCase();
            process.nextTick(function() {
                if (!req.user) {
                    User.findOne({'local.email' : email}, function(err, user) {
                        if (err) return done(err);
                        if (user) {
                            return done(null, false);
                        } else {
                            var newUser = new User();
                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);
                            newUser.name = req.body.name;
                            newUser.avatar = req.body.avatar;
                            newUser.userType = req.body.userType;
                            
                            newUser.save(function (err, result) {
                                if (err) return done(err);
                                
                                if (req.body.userType)
        
        
    } 
};