var mongoose = require('mongoose');

var athleteSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    gradClass: {type: Number, required: true},
    email: {type: String},
    phone: {type: String},
    address: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zipCode: {type: String}
    },
    emergency: {
        contactName: {type: String},
        phone: {type: String},
        email: {type: String}
    },
    injuries: [
        {
            bodyPart: {type: String},
            severity: {type: String},
            report: {
                date: {type: Date},
                notes: {type: String}
            }
        }
    ],
    injured: {type: Boolean},
    expectations: [
        {
            expectation: {type: String},
            achieved: {type: Boolean}
        }
    ],
    attendance: [
        {
            date: {type: Date},
            reason: {type: String}
        }
    ],
    results: [
        {
            event: {type: String},
            date: {type: Date},
            meet: {type: String},
            result: {type: String},
            place: {type: String},
            points: {type: Number}
        }
    ]
});

module.exports = mongoose.model('athlete', athleteSchema);