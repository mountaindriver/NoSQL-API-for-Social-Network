const { Thoughts, Reactions, User } = require('../models/');


module.exports = {
// /api/users 

    // GET all users
    getUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500))
    },

    // POST a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

 // /api/users/:_id

    // GET a single user by its _id and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params._id })
            .then((user) => res.json(user))
            .catch((err) => res.status(500))
    },

    // PUT to update a user by its _id
    updateUser(req, res) {
        User.findByIdAndUpdate({ _id: req.params._id })
            .then((user) => res.json(user))
            .catch((err) => res.json(err))
    },

    // DELETE to reomve user by its _id
    deleteUser(req, res) {
        User.findByIdAndDelete({ _id: req.params._id })
            .then((user) => {
                console.log("User Deleted")
                res.json(user)
            })
            .catch((err) => res.json(err))
        // BONUS remove user's associated thoughts when deleted
    },

// /api/users/:userId/friends/:friendId

    // POST to add new friend to a user's friend list
    addNewFriend(req, res) {

    },

    // DELETE to remove a friend from a user's friend list
    removeFriend(req, res) {

    },
}