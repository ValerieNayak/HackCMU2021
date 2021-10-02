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

const getUserMessages = async (req, res) => {
  const userid = req.params.userid;
  try {
    const messages = await Message.aggregate([
      {$match: {userid: userid}}
    ])
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
  const userid = req.params.userid;
  try {
    const msgs = await Message.aggregate([
      {$match: {userid: userid}},
      {$sample: {size:1}}
    ])
    res.status(200).json(msgs[0]);
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

const deleteMessage = async (req, res) => {
  const _id = req.body._id;
  try {
    await Message.findOneAndRemove({_id: _id});
    res.status(203).json({_id: _id});
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

module.exports.getAllMessages = getAllMessages;
module.exports.getUserMessages = getUserMessages;
module.exports.getMessage = getMessage;
module.exports.getRandomMessage = getRandomMessage;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;