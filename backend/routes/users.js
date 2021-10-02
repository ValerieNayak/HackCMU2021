const express = require('express');

const user_Act = require('../controllers/users');

const router = express.Router();

router.get('/', user_Act.getAllUsers);
router.get('/id', user_Act.getUser);
router.post('/create', user_Act.createUser)

module.exports = router