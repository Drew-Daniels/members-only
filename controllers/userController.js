// Models
const User = require('../models/user');

// Modules
const async = require('async');
const { body, validationResult } = require('express-validator');

exports.user_create_get = function(req, res, next) {
    res.render('register_user_form');
}

exports.user_create_post = function(req, res, next) {
    res.send('Will be added later')
}

exports.user_login_get = function(req, res, next) {
    res.render('login_form');
}

exports.user_login_post = function(req, res, next) {
    res.send('Will be added later');
}
exports.admin_create_get = function(req, res, next) {
    res.render('register_admin_form');
}
exports.admin_create_post = function(req, res, next) {
    res.send('Will be added later')
}