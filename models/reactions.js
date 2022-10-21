const { Schema } = require('mongoose');

// Schema to create a Reactions model
const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
        }
    },
)

// exported to thoughts.js
module.exports = reactionsSchema;