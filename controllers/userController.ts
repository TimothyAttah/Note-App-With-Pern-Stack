const User = require('../model/UserModel');
const UserPosts = require('../model/PostModel');

const userControllers = {
	getUser: async (req: any, res: any) => {
		try {
			const user = await User.findOne({ _id: req.params.id }).select(
				'-password'
			);
			if (user) {
				await UserPosts.find({ postedBy: req.params.id })
					.populate('postedBy', '-password')
					.exec(async (err: any, posts: any) => {
						if (err) {
							return res.status(404).json({ error: err.message });
						}
						res.status(200).json({
							message: 'Single user profile',
							user,
							posts,
						});
					});
			}
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	followUser: async (req: any, res: any) => {
		
			if (req.body.userId !== req.params.id) {
				try {
					const user = await User.findById(req.params.id)
					const currentUser = await User.findById(req.body.userId)
					if (!user.followers.includes(req.body.userId)) {
						await user.updateOne({$push: {followers: req.body.userId}})
						await currentUser.updateOne({ $push: { followings: req.body.userId } })
						res.status(200).json('User has been followed')
					} else {
							res.status(403).json({ error: "You already follow this user" });
					}
				} catch (err) {
						res.status(500).json({ error: err.message });
				}
			} else {
				res.status(403).json({error: 'You can\'t follow yourself'})
			}
	}
};

module.exports = userControllers;
