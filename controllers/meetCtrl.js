var Meet = require('../models/scheduleModel');

module.exports = {
    get: function (req, res) {
        Meet.find({}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },

    create: function (req, res) {
        Meet.create(req.body, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    update: function (req, res) {
        Meet.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    remove: function (req, res) {
        Meet.findByIdAndRemove(req.query.id, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    }
    
};