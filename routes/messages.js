const express = require('express');
const router = express.Router();

// require controller modules
const userController = require('../controllers/userController');
const messageController = require('../controllers/messageController');
const avatarController = require('../controllers/avatarController');

// Set the controllers for request type
router.get('/', messageController.index);


module.exports = router;
