const userRouter = require('express').Router();
const userAuth = require('../middleware/auth');
const userController = require('../controllers/userController');

userRouter.get('/:id/user', userAuth, userController.getUser)
userRouter.get('/:id/follow', userController.followUser)

module.exports = userRouter;
