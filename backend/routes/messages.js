const express = require('express');

const message_Act = require('../controllers/messages');

const router = express.Router();

router.get('/', message_Act.getAllMessages);
router.get('/user', message_Act.getUserMessages);
router.get('/id', message_Act.getMessage);
router.get('/random', message_Act.getRandomMessage);
router.post('/create', message_Act.createMessage);
router.patch('/update', message_Act.updateMessage);
router.delete('/delete', message_Act.deleteMessage);

module.exports = router;