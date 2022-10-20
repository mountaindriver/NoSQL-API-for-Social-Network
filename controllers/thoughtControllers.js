const { Thoughts, Reactions, User } = require('../models/');
const { db } = require('../models/user');

module.exports = {
 // api/thoughts

    // GET to get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => {
                !thoughts
                ? res.json({message: "No thoughts"})
                :res.json(thoughts)
            })
            .catch((err) => {
                console.err({ message: err });
                return res.status(500).json(err);
            });
    },

    
    // POST to create a new thought
    createThoughts(req, res) {
        Thoughts.create(req.body)
            .then((thoughts) => {
                // (don't forget to push the created thought's _id to the associated user's thoughts array field)
                // user.thoughts.push(req.body.id)
                res.json(thoughts)
            })
            .catch((err) => {
                console.err({ message: err });
                return res.status(500).json(err);
            })
        },

 // api/thoughts/:thoughtsid
        
    // GET to get a single thought by its _id
    getSingleThoughts(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .then((thoughts) => {
                !thoughts
                    ? res.status(404).json({ message: 'No Thoughts found' })
                    : res.json(thoughts)
            })
            .catch((err) => res.status(500).json(err));
    },

    // PUT to update a thought by its _id
    updateThoughts(req, res) {
        Thoughts.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true })
            .then((thoughts) => {
                !thoughts
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thoughts)
            })
            .catch((err) => res.status(500).json(err));
    },

    // DELETE to remove a thought by its _id
    deleteThoughts(req, res) {
        Thoughts.findByIdAndDelete({ _id: req.params.thoughtId })
            .then((thoughts) => {
                !thoughts
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ message: 'Thought Deleted!' })
            })
            .catch((err) => res.status(500).json(err));
    },

// /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Reactions.create(req.body)
            .then((reactions) => {
                res.json(reactions)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })
    },

    // DELETE to pull and remove reaction by the reaction's reactionId value
    deleteReaction(req, res) {
        Reactions.findByIdAndDelete({ _id: req.params.reactionId })
            .then((reactions) => {
                !reactions
                    ? res.status(404).json({ message: 'No reaction Found' })
                    : console.log("reaction found")
            })
            .catch((err) => res.status(500).json(err));
    },

}