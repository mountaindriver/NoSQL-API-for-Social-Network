const router = require('express').Router();
const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    deleteThoughts,
    updateThoughts,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtControllers');

// api/thoughts
router
.route('/')
.get(getThoughts)


// /api/thoughts/:thoughtsId
router
.route('/:thoughtId')
.get(getSingleThoughts)
.post(createThoughts)
.delete(deleteThoughts)
.put(updateThoughts)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction)


module.exports = router;
