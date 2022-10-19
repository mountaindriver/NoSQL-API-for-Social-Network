const { Schema, model } = require('mongoose');

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
            // connect to user that created thought
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'REACTIONS',
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Thoughts =  model("THOUGHTS", thoughtsSchema);

module.exports = Thoughts;