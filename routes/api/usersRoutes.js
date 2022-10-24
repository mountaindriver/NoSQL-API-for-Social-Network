const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    deleteUserThoughts,
    addNewFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users 
router
    .route('/')
    .get(getUsers)
    .post(createUser)

// /api/user/:userid
router
    .route('/:userid')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// /api/users/:userId/:friendId
router
    .route('/:userId/:friendId')
    .put(addNewFriend)
    .delete(removeFriend)

module.exports = router;
