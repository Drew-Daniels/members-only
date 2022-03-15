const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const MessageSchema = new Schema({
    timestamp: {type: Date, required: true, default: Date.now},
    title: {type: String, required: true},
    body: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

function dateFormatter(date, method) {
    if (method='html') {
       return date ? DateTime.fromJSDate(date).toFormat('yyyy-MM-dd'): '';
    } else {
        return date ? DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED): '';
    }
}

MessageSchema
.virtual('timestamp_pretty')
.get(function() {
    return dateFormatter(this.timestamp);
})

MessageSchema
.virtual('timestamp_html')
.get(function() {
    return dateFormatter(this.timestamp, 'html');
})

module.exports = mongoose.model('Message', MessageSchema);