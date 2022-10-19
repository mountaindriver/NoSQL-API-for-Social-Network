const { Schema, Types } = require('mongoose');

// Schema to create a Reactions model
const reactionsSchema = new Schema(
    {
        reactionsId: {
            type: Schema.Types.ObjectId,
            default: ()=> new Types.ObjectId(),
        },
        reactionsBody: {
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
    {
        toJSON: {
            virtuals: true,
        },
    }
)

const Reactions = model('REACTIONS', reactionsSchema);

module.exports = Reactions;