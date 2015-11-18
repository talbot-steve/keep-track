var Meet = require('../models/scheduleModel');
var User = require('../models/UserModel');

module.exports = {
    get: function (req, res) {
        console.log(575757575757, req.user)
        User.find({_id: req.user._id})
        .populate('meets')
        .exec(function(err, data){
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(data)
            }
        })
    },

    create: function(req, res) {
        Meet.create(req.body, function(err, meet) {
            if (err) {
                res.send(err)
            } else {
                 User.findByIdAndUpdate({_id: req.user._id}, {$push: {meets: meet._id}}, {new: true}, function(err, user) {
                    console.log(err, user)
                    user
                    .populate('meets', function(err, data) {
                        if (err) console.log('error', err)
                        res.send(data)
                    })
                })
            }
        })
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