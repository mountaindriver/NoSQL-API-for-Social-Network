const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            // set to current time stamp
        },
        username: {
            type: String,
            required: true,
            // connect to user that created thought
        },
        reactions: {
            // type: array?
        }
    },
    {
        // toJSON:
    }
)

module.exports = thoughtSchema;