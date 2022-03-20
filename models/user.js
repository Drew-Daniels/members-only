const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, maxLength: 100},
    password: { type: String, required: true, maxLength: 100},
    avatar: { type: Schema.Types.ObjectId, ref: 'Avatar', required: true},
    is_member: { type: Boolean, required: true, default: false },
    is_admin: { type: Boolean, required: true, default: false },
});

UserSchema
.virtual('avatarImgURL')
.get(function() {
    return this.avatar.imageURL;
});

module.exports = mongoose.model('User', UserSchema);
