const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

// GET request for registering to become an admin
router.get('/register', user_controller.admin_create_get);
// POST request for registering to become an admin
router.post('/register', user_controller.admin_create_post);

module.exports = router;
