// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: {type: String}
});

const User = mongoose.model('user', userSchema);
module.exports = User;
