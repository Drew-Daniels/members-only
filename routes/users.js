const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

// USER ROUTES
// GET request for creating an account
router.get('/register', user_controller.user_create_get);
// POST request for creating an account
router.post('/register', user_controller.user_create_post);
// GET request for logging into a pre-existing account
router.get('/login', user_controller.user_login_get);
// POST request for logging into a pre-existing account
router.post('/login', user_controller.user_login_post);

module.exports = router;