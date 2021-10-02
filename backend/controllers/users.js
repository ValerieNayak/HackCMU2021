const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/userdata.js');

const router = express.Router();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

const getUser = async (req, res) => {
  const _id = req.params._id;
  try {
    const user = await User.findOne({_id: _id});
    res.status(200).json(user);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

const searchUsers = async (req, res) => {
  const username = req.params.username;
  // try {
  //   const users = await User.aggregate
  // }
}

const createUser = async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username
  })
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.searchUsers = searchUsers;
module.exports.createUser = createUser;