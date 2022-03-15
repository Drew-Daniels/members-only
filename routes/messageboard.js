const express = require('express');
const router = express.Router();

// require controller modules
const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');
const avatar_controller = require('../controllers/avatarController');

module.exports = router;
