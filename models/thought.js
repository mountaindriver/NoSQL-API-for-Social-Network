const { Schema, model } = require('mongoose');

// Schema to create a Thought model
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
            default: Date.now(),
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
        toJSON: {
            virtuals: true,
        },
    }
);

const Thought =  model("thought", thoughtSchema);

module.exports = Thought;