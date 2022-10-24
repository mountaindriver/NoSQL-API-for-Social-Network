const { Schema, model } = require('mongoose');
const reactionsSchema = require('./reactions')
// Schema to create a Thought model
const thoughtsSchema = new Schema(
    {
        thoughtsText: {
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
        },
        reactions: [ reactionsSchema ]
    },
);

const Thoughts =  model("thoughts", thoughtsSchema);

module.exports = Thoughts;