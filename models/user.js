const mongoose = require('mongoose');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const passwordGenerator = require('generate-password');

const Schema = mongoose.Schema;

const getRandomName = function() {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
}

const getStrongPassword = function() {
    return passwordGenerator({ length: 10, numbers: true , symbols: true });
}

const UserSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, required: true, maxLength: 100 },
    avatar: { type: Schema.Types.ObjectId, ref: 'Avatar', required: true },
    is_member: { type: Boolean, required: true, default: false },
    is_admin: { type: Boolean, required: true, default: false },
    username: { type: String, required: true, maxLength: 100, default: getRandomName }, // automatically generate a random username - display after creation
    password: { type: String, required: true, maxLength: 100, default: getStrongPassword }, // automatically generate a strong password - display after creation
});

module.exports = mongoose.model('User', UserSchema);
