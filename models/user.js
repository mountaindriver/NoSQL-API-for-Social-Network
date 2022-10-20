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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'THOUGHTS'
            }
        ]
    },
    {
        toJSON: {
            virtual: true,
        },
    }
);

const User = model('user', userSchema);

// User.create([
//     {username: 'lucas', email: 'lucas@lucas.com'},
//     {username: 'josh', email: 'josh@josh.com'},
//     {username: 'yesman', email: 'yes@man.com'},
// ]);

module.exports = User;