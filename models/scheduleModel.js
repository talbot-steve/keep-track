var mongoose = require('mongoose');

var meetSchema = mongoose.Schema({
    date: {type: Date, required: true},
    team: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    time: {type: String},
    location: {type: String},
    teamResults: {
        score: {type: String},
        result: {type: String}
    }
});

module.exports = mongoose.model('meet', meetSchema);