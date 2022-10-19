const { Thought, Reaction, User } = require('../models/');

module.exports = {

// api/thoughts

    // GET to get all thoughts
    getThoughts(req, res){
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err)=> res.status(500).json(err));
    },

    // GET to get a single thought by its _id
    getSingleThought(req, res){
        Thought.findOne({_id: req.params.thoughtId})
            .then((thought)=>{
                !thought ?res.status(404).json({ message: 'No Thought found'})
                : res.json(thought)
            })
            .catch((err)=> res.status(500).json(err));
    }

    // POST to create a new thought(don't forget to push the created thought's _id to the associated user's thoughts array field)

    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove reaction by the reaction's reactionId value


}