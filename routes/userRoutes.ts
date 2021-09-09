const userRouter = require('express').Router();
const userAuth = require('../middleware/auth');
const userController = require('../controllers/userController');

userRouter.get('/:id', userAuth, userController.getUser)

module.exports = userRouter;
