var Result = require('../models/statsModel');

module.exports = {
    get: function(req, res) {
        Result.find({}, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data);
            }
        })
    },

    create: function(req, res) {
        Result.create(req.body, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },
    
    update: function(req, res) {
        Result.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },
    
    remove: function(req, res) {
        Result.findByIdAndRemove(req.query.id, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    }
};