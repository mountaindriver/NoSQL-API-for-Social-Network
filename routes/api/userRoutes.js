const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addNewFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users 
router
    .route('/')
    .get(getUsers)
    .post(createUser)

// /api/users/:userId/friends/:friendId
router
    .route('/userId/friends/:friendId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// /api/users/:userId/friends/:friendId
router
    .route('/api/users/:userId/friends/friendId')
    .post(addNewFriend)
    .delete(removeFriend)

module.exports = router;
