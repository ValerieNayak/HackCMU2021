const express = require('express');
const mongoose = require('mongoose');

const Message = require('../models/messagedata.js');

const router = express.Router();

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

const getMessage = async (req, res) => {
  const _id = req.params._id;
  try {
    const msg = await Message.findOne({_id: _id});
    res.status(200).json(msg);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

const getRandomMessage = async (req, res) => {
  const count = Message.estimatedDocumentCount();
  var random = Math.floor(Math.random() * count);
  try {
    const msg = await Message.aggregate([
      {$match: {userid: req.body.userid}},
      {$sample: {size:1}}
    ])
    res.status(200).json(msg);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
  
}

const createMessage = async (req, res) => {
  console.log(req.body);
  const newMessage = new Message({
    userid: req.body.userid,
    message: req.body.message,
  })
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch(error) {
    res.status(400).json({message: error.message});
  }
}

const updateMessage = async (req, res) => {
  const _id = req.body._id;
  try {
    await Message.findOneAndUpdate(
      {
        _id: _id
      },
      {
        userid: req.body.userid,
        message: req.body.message
      });
    res.status(202).json({_id: _id});

  } catch(error) {
    res.status(401).json({message: error.message});
  }
}

//TODO: add delete function
//TODO: add get messages by username function
//TODO: add random select function

module.exports.getAllMessages = getAllMessages;
module.exports.getMessage = getMessage;
module.exports.getRandomMessage = getRandomMessage;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;