const router = require('express').Router();
const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    deleteThoughts,
} = require('../../controllers/thoughtControllers')

// api/thoughts
router
.route('/')
.get(getThoughts)


// /api/thoughts/:thoughtsId
router
.route('/:thoughtId')
.get(getSingleThoughts)


module.exports = router;
