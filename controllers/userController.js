const { trusted } = require('mongoose');
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

    // PUT to update a user by its userid
    updateUser(req, res) {
        User.findByIdAndUpdate({ _id: req.params.userid })
            .then((user) => res.json(user))
            .catch((err) => res.json(err))
    },

    // DELETE to remove user by its userid
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userid })
        .then((user) => {
           return !user
                ? res.status(404).json({ message: "No User found with that id"})
                : Thoughts.deleteMany({_id: {$in: user.thoughts}})
        })
        .then((thoughts)=>{
            !thoughts
            ? res.status(404).json({
                message: "User Deleted, but no thoughts found :("
            })
            : res.json({ 
                message: "User and their thoughts have been deleted"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
    },
      
// /api/users/:userId/:friendId

    // POST to add new friend to a user's friend list
    addNewFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        )
        .then((friend)=>{
            !friend
            ?res
                .status(404)
                .json({message: "No friend found"})
            : res.json(friend)
        })
        .catch((err) => {
            console.err(err)
             res.status(500).json(err);
        })
    },

    // DELETE to remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req. params.userId},
            {$pull: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        )
        .then((friend)=>{
            !friend
            ?res
                .status(404)
                .json({message: "No friend found"})
            : res.json(friend)
        })
        .catch((err) => {
            console.err(err)
             res.status(500).json(err);
        })
    },
}