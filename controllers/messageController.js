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
    // 2. For each message:
        // - Retreive the formatted timestamp to display
        // - Retrieve the avatar Image url for the user who posted
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
    // We can get a key: value pair list of users to their avatar Image URls and
    // Match in the pug template
    // async.parallel({
    //     // Retrieve all messages - sorted in order of earliest to latest
    //     messages: function(callback) {
    //         Message.find()
    //             .sort({ timeStamp: 1 })
    //             .populate('user', 'username avatar')
    //             .exec(callback)
    //     },
    //     // Retrieve all avatars
    //     avatars: function(callback) {
    //         Avatar.find().lean().exec(callback)
    //     }
    //     // this is the 'callback'
    // }, function(err, results) {
    //     if (err) { return next(err); }
    //     // Success
    //     res.render('messages', { message_list: results.messages, avatars: results.avatars })
    // });
};
