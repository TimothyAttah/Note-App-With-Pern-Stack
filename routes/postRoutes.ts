const postRouter = require('express').Router();
const postAuth = require('../middleware/auth');
const postController = require('../controllers/postController');

postRouter.post('/create', postAuth, postController.createPost);

module.exports = postRouter;