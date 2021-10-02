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
  const id = req.params.id;
  try {
    const msg = await Message.findOne({id: id});
    res.status(200).json(msg);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

const createMessage = async (req, res) => {
  console.log(req.body);
  const newMessage = new Message({
    id: req.body.id,
    username: req.body.username,
    message: req.body.message,
  })
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch(error) {
    res.status(400).json({message: error.message});
  }
}

//TODO: add update and delete functions

module.exports.getAllMessages = getAllMessages;
module.exports.getMessage = getMessage;
module.exports.createMessage = createMessage;