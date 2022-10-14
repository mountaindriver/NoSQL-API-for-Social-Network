const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique: true,
            // trimmed: true,
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
        // toJSON
    }
)

module.exports = userSchema;