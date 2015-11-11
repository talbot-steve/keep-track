var User = require('../models/UserModel');

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
    }
    
};