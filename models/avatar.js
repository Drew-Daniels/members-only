const config = require('dotenv').config({path:`${__dirname}/../.env`});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
    fileName: {type: String, required: true},
    fileExt: {type: String, required: true, default: '.svg'}
});

AvatarSchema
.virtual('imageURL')
.get(function() {
    return process.env.S3_BUCKET_AVATARS + this.name + this.fileExt;
});

module.exports = mongoose.model('Avatar', AvatarSchema);
