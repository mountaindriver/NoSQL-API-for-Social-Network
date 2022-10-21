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
.post(createThoughts)

// /api/thoughts/:thoughtsId
router
.route('/:thoughtId')
.get(getSingleThoughts)
.delete(deleteThoughts)
.put(updateThoughts)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(createReaction)

// /api/thoughts/:thoughtId/:reactionId
router
.route('/:thoughtId/:reactionId')
.delete(deleteReaction)

module.exports = router;
