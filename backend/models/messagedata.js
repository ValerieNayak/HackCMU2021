const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }

})

var messagedata = mongoose.model('messagedata', messageSchema);
module.exports = messagedata;