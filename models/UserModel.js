var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    team: {type: String, required: true},
    teamLocation: {type: String, required: true},
    athletes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'athlete' }],
    meets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'meet' }]
});

userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password'))    return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword){
    var user = this;
    return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('users', userSchema);

