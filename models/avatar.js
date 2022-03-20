const config = require('dotenv').config({path:`${__dirname}/../.env`});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
    url: {type: String, required: true }
});

module.exports = mongoose.model('Avatar', AvatarSchema);
