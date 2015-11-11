var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
    name: {type: String, required: true},
    event: {type: String, required: true},
    date: {type: Date, required: true},
    meet: {type: String},
    result: {type: String, required: true},
    place: {type: String},
    points: {type: Number}
})

module.exports = mongoose.model('result', resultSchema);