const express = require('express');
const router = express.Router();

// require controller modules
const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');

// MESSAGE ROUTES
router.get('/', message_controller.index);

module.exports = router;
