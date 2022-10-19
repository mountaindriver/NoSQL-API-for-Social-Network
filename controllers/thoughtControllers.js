const { Thoughts, Reactions, User } = require('../models/');

module.exports = {

// api/thoughts

    // GET to get all thoughts
    getThoughts(req, res){
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err)=> res.status(500).json(err));
    },

    // GET to get a single thought by its _id
    getSingleThoughts(req, res){
        Thoughts.findOne({_id: req.params.thoughtId})
            .then((thoughts)=>{
                !thoughts ?res.status(404).json({ message: 'No Thoughts found'})
                : res.json(thoughts)
            })
            .catch((err)=> res.status(500).json(err));
    },

    // POST to create a new thought(don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThoughts(req, res){
        Thoughts.create(req.body)
            .then((thoughts)=> res.json(thoughts))
            .catch((err)=> {
                console.log(err);
                return res.status(500).json(err);
            })
    }


    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field



    // DELETE to pull and remove reaction by the reaction's reactionId value


}