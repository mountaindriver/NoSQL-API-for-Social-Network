const router = require('express').Router();
const {
getUsers,
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

// /api/users/:userId/friends/:friendId
router
.route('/userId/friends/:friendId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

router
.route('/api/users/:userId/friends/friendId')
.post(addNewFriend)
.delete(removeFriend)

module.exports = router;
