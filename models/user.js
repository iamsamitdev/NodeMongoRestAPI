const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create users schema & model
const UserSchema = new Schema(
    {
        fullname: {
            type: String,
            required: [true, 'Fullname field is required']
        },
        email: {
            type: String,
            required: [true, 'Email field is required']
        },
        tel: {
            type: String,
            required: [true, 'Tel field is required']
        },
        created_at: {
            type: String
        }
    }, { versionKey: false }
)

const User = mongoose.model('users', UserSchema)

module.exports = User