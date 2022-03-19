// Models
const Message = require('../models/message');
const User = require('../models/user');
const Avatar = require('../models/avatar');

// Modules
const async = require('async');
const { body, validationResult } = require('express-validator');
const message = require('../models/message');

exports.index = function(req, res, next) {
    // 1. Retrieve all messages from earliest to latest
    // 2. Retrieve corresponding user info for each 

    // Method 1 - No ability to retrieve Avatar image this way
    Message.find()
    .sort({ timeStamp: 1 })
    .populate({
        path: 'user',
        populate: { path: 'avatar' }
    })
    .exec(function(err, list_messages) {
        if (err) { return next(err)}
        // Successful
        res.render('messages', { message_list: list_messages });
    })
};
