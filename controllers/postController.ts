const Post = require('../model/PostModel');
const UserPost = require('../model/UserModel');
const PostComment = require('../model/CommentModel');

const postControllers = {
	createPost: async (req: any, res: any) => {
		const newPost = req.body;
		const { userId, desc, img } = newPost;
		console.log(userId, desc, img);
		try {
			req.user.password = undefined;
			const post = await new Post({
				userId,
				desc,
				img,
				postedBy: req.user,
			});
			await post.save();
			res.status(200).json({ message: 'New post created', post });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},
	allPosts: async (req: any, res: any) => {
		try {
			const posts = await Post.find()
				.sort({ createdAt: -1 })
				.populate('postedBy', '-password');
			res.status(200).json({ message: 'All posts', posts });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},
	likePost: async (req: any, res: any) => {
		try {
			const post = await Post.findById(req.params.id);
			if (!post.likes.includes(req.body.userId)) {
				await post
					.updateOne({ $push: { likes: req.body.userId } })
					.populate('postedBy', '-password');
				res.status(200).json({ message: 'The post has been liked.' });
			} else {
				await post.updateOne({ $pull: { likes: req.body.userId } });
				res.status(200).json({ message: 'The post has been disliked.' });
			}
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}
	},
	postComments: async (req: any, res: any) => {
		const comment = {
			text: req.body.text,
			postedBy: req.user,
			// date: Date.now()
			// postedBy: req.user._id
		};
		try {
			await Post.findByIdAndUpdate(
				req.body.postId,
				{
					$push: { comments: comment },
				},
				{ new: true }
			)
				.populate('postedBy', '-password')
				.populate('comments.postedBy', '_id firstName lastName profilePicture')
				// .populate('comments.postedBy', 'postedBy')
				.exec((err: any, result: any) => {
					if (err) {
						return res.status(404).json({ error: err.message });
					} else {
						return res.status(200).json({ message: 'You commented', result });
					}
				});
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}
	},
	deletePost: async (req: any, res: any) => {
		try {
			await Post.findOne({ _id: req.params.postId })
				.populate('postedBy', '_id')
				.exec(async (err: any, post: any) => {
					if (err) {
						return res.status(404).json({ error: err.message });
					}
					if (post.postedBy._id.toString() === req.user._id.toString()) {
						const deletedPost = await post.remove();
						return res
							.status(200)
							.json({ message: 'Post deleted successfully', deletedPost });
					}
				});
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}
	},
	createPostComment: async (req: any, res: any) => {
		const { id } = req.params;
		const { text } = req.body;

		
		try {
				req.user.password = undefined;
				const postComment = await new PostComment({
					text,
					postedBy: req.user,
				});
			await postComment.save();
			const comments = await Post.findByIdAndUpdate(id, {
				$push: {comments: postComment}
			}, {new: true})
			// post.comments.push(postComment)

			// const updatedPost = await Post.findByIdAndUpdate(id, post, {
			// 	new: true,
			// })
				.populate('postedBy', '-password')
				.populate('comments.postedBy', '_id firstName lastName profilePicture createdAt');
			// res.status(200).json({ message: 'You commented', comments });
			res.status(200).json({ message: 'You post a comment', postComment });
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}

		// try {
		// 	req.user.password = undefined;
		// 	const postComment = await new PostComment({
		// 		text,
		// 		postedBy: req.user,
		// 	});
		// 	await postComment.save();
		// 		await Post.findByIdAndUpdate(
		// 			req.body.postId,
		// 			{
		// 				$push: { comments: postComment },
		// 			},
		// 			{ new: true }
		// 		)
		// 	.exec((err: any, result: any) => {
		// 			if (err) {
		// 				return res.status(404).json({ error: err.message });
		// 			} else {
		// 				return res.status(200).json({ message: 'You commented', result });
		// 			}
		// 		});
		// 	// res.status(200).json({ message: 'You post a comment', postComment });
		// } catch (err) {
		// 	return res.status(500).json({ error: err });
		// }
	},


	allPostComment: async (req: any, res: any) => {
		try {
			const { id } = req.params;
				const post = await Post.findById(id)
				// post.comments.push(postComment);
				// const posts = await PostComment.findById(id)
				// 	.sort({ createdAt: -1 })
				// 	.populate('postedBy', '-password');
				// res.status(200).json({ message: 'All posts', posts });
			
			
					.exec(async (err: any, post: any) => {
						if (err) {

							return res.status(404).json({ error: err.message });
						} else {
							res.status(200).json({ message: 'All posts', post });
						}
						
			})

			
		} catch (err) {
				console.log(err);
				return res.status(500).json({ error: err });
		}
	},







	deletePostComments: async (req: any, res: any) => {
		try {
			// await Post.findOne({ _id: req.params.postId })
			// 	.populate('postedBy', '_id')
			// 	.exec(async (err: any, post: any) => {
			// 		if (err) {
			// 			return res.status(404).json({ error: err.message });
			// 		}
			// 		if (post.postedBy._id.toString() === req.user._id.toString()) {
			// 			const deletedNote = await post.remove();
			// 			return res
			// 				.status(200)
			// 				.json({ message: 'Note deleted successfully', deletedNote });
			// 		}
			// 	});
			const deleteComment = await Post.findByIdAndDelete(req.params.id)
			res.status(200).json({message: 'Comment deleted', deleteComment})
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}
	},
};

module.exports = postControllers;
