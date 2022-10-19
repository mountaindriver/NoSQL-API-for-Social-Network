const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            // unique: true,
            // must match valid email
        },
        thoughts: {

        }
    },
    {
        toJSON: {
            virtual: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;