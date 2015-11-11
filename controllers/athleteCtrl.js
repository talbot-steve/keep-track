var Athlete = require('../models/athletesModel');

module.exports = {
    get: function(req, res) {
        Athlete.find({}, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data);
            }
        })
    },

    create: function(req, res) {
        Athlete.create(req.body, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },
    
    update: function(req, res) {
        Athlete.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },
    
    remove: function(req, res) {
        Athlete.findByIdAndRemove(req.query.id, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },
    
    pushResultToUser: function(req, res) {
        Athlete.findByIdAndUpdate(req.params.athlete_id, {$push:{results: req.params.result_id}}, {new: true}, function(err, user) {
            if (err) {
                return res.status(500).end();
            } 
                res.status(200).send(user)
        });
    }
    
};