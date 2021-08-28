const postRouter = require('express').Router();
const postAuth = require('../middleware/auth');
const postController = require('../controllers/postController');
const uploadController = require('../controllers/uploadController');

postRouter.post('/create', postAuth, postController.createPost);
postRouter.get('/', postController.allPosts);
postRouter.post('/upload', uploadController.createUpload);

module.exports = postRouter;