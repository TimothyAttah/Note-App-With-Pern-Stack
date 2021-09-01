const Post = require('../model/PostModel');
const UserPost = require('../model/UserModel');

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
	likePost: async (req:any, res:any) => {
		try {
			const post = await Post.findById(req.params.id);
			if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } })
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
			postedBy: req.user._id
		}
		try {
			await Post.findByIdAndUpdate(req.body.postId, {
				$push:{comments: comment}
			}, { new: true })
				.populate('postedBy', '-password')
				.exec((err: any, result: any) => {
					if (err) {
						 return res.status(404).json({ error: err.message });
					} else {
						 return res.status(200).json({ message: 'You commented', result });
					}
				})
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: err });
		}
	}
};

module.exports = postControllers;
