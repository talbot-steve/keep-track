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
                User.findById(req.user._id, function(err, user) {
                    user.meets.push(meet._id)
//                    .save()
                    .populate('meets')
                    .exec(function(err, data) {
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