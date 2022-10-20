const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addNewFriend,
    removeFriend,
    deleteAllUser,
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

// /api/users/:userId/friends/:friendId
router
    .route('/userId/friends/:friendId')
    .post(addNewFriend)
    .delete(removeFriend)

router
    .route('/flush')
    .delete(deleteAllUser)

module.exports = router;
