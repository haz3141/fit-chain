// Import Dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Sets Cost Factor to 10 Hash Rounds
// Every +1 Rounds Doubles Necessary Time 
// More Time Increases Brute Force Difficulty
const saltRounds = 10;

// User Objects Factory
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Pre-Save User Schema Hook
UserSchema.pre('save', function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
        if (err) {
          next(err);
        } else {
            document.password = hashedPassword;
            next();
        }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

// Export UserSchema as User Model
module.exports = mongoose.model('User', UserSchema);