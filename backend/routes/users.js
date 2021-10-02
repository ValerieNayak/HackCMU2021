const express = require('express');

const user_Act = require('../controllers/users');

const router = express.Router();

router.get('/', user_Act.getAllUsers);
router.get('/id/:_id', user_Act.getUser);
router.get('/search/:username', user_Act.searchUsers);
router.post('/create', user_Act.createUser);

module.exports = router;