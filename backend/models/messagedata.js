const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  userid: {
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