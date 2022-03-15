const mongoose = require('mongoose');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const Schema = mongoose.Schema;

const getRandomName = function() {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
}

const UserSchema = new Schema({
    password: { type: String, required: true, maxLength: 100 },
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, required: true, maxLength: 100 },
    is_member: { type: Boolean, required: true, default: false},
    is_admin: { type: Boolean, required: true, default: false },
    avatar: { type: Schema.Types.ObjectId, ref: 'Avatar', required: true },
    username: { type: String, required: true, maxLength: 100, default: getRandomName}, // username will be randomly created
});

module.exports = mongoose.model('User', UserSchema);
