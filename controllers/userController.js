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

 // /api/users/:userid

    // GET a single user by its userid and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userid })
            .then((user) => {
                res.json(user)
            })
            .catch((err) => res.status(500).json(err))
    },

// ????
    // PUT to update a user by its userid
    updateUser(req, res) {
        User.findByIdAndUpdate({ _id: req.params.userid })
            .then((user) => res.json(user))
            .catch((err) => res.json(err))
    },

    // DELETE to remove user by its userid
    deleteUser(req, res) {
        User.findByIdAndDelete({ _id: req.params.userid })
            .then((user) => {
                !user
                ? res.status(404).json({ message: "No User with that id Found"})
                :res.json({message: "User Deleted!"})
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

    deleteAllUser(req, res){
        User.deleteMany()
        .then(()=> res.json({message: "deleted all users"}))
    }
}