const userRouter = require('express').Router();
const userAuth = require('../middleware/auth');
const userController = require('../controllers/userController');

userRouter.get('/:id/user', userAuth, userController.getUser)
userRouter.put('/:id/follow', userController.followUser)
userRouter.put('/:id/unfollow', userController.unfollowUser)

module.exports = userRouter;
