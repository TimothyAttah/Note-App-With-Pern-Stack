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
};

module.exports = userControllers;
