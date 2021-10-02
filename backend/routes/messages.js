const express = require('express');

const message_Act = require('../controllers/messages');

const router = express.Router();

router.get('/', message_Act.getAllMessages);
router.get('/:_id', message_Act.getMessage);
router.post('/create', message_Act.createMessage);
router.patch('/update', message_Act.updateMessage);
//TODO: add more functions

module.exports = router;