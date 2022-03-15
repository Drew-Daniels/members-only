// Models
const Message = require('../models/message');

// Modules
const async = require('async');
const { body, validationResult } = require('express-validator');
const message = require('../models/message');

exports.messageboard = function(req, res, next) {

    Message.find()
    .sort(['timestamp', 'ascending'])
    .exec(function(err, messages) {
        if (err) { return next(err); }
        // Successful
        res.render('messageboard', { title: 'Members Only Messageboard', messages: messages });
    });
};