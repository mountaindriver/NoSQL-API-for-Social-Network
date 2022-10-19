const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
} = require('../../controllers/thoughtControllers')

// api/thought
router
.route('/')
.get(getThoughts)


// /api/thought/:thoughtId
router
.rought('/:thoughtId')
.get(getSingleThought)


module.exports = router;
