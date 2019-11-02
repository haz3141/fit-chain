const mongoose, { Schema } = require("mongoose");
const bcrypt = require('bcrypt');

const saltRounds = 10;

// const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

module.exports = mongoose.model('User', UserSchema);