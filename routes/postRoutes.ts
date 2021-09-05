const postRouter = require('express').Router();
const postAuth = require('../middleware/auth');
const postController = require('../controllers/postController');
const uploadController = require('../controllers/uploadController');

postRouter.post('/create', postAuth, postController.createPost);
postRouter.get('/', postController.allPosts);
postRouter.post('/upload', uploadController.createUpload);
postRouter.put('/:id/like', postController.likePost);
postRouter.put('/comments', postAuth, postController.postComments)
postRouter.delete(
	'/:postId/delete',
	postAuth,
	postController.deletePost
);
postRouter.delete(
	'/comments/:postId/delete',
	postAuth,
	postController.deletePostComments
);
postRouter.post('/:id/comments/create', postAuth, postController.createPostComment);
postRouter.post('/:id/comments', postAuth, postController.allPostComment);

module.exports = postRouter;
