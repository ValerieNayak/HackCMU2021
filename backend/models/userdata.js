const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  }
})

var userdata = mongoose.model('userdata', UserSchema);
module.exports = userdata;