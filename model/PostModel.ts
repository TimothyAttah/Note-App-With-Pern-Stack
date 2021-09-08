const mongoosePost = require('mongoose');
const { ObjectId } = mongoosePost.Schema.Types;

const PostSchema = new mongoosePost.Schema(
	{
		userId: {
			type: String,
		},
		desc: {
			type: String,
		},
		img: {
			type: String,
		},
		likes: [{ type: ObjectId, ref: 'User' }],
		// comments: [
		// 	{
		// 		type: String,
		// 		postedBy: { type: ObjectId, ref: 'User' },
		// 	},
		// 	{timestamps: true}
		// ],
		comments: [
			{
				text: String,
				postedBy: { type: ObjectId, ref: 'User' },
			},
			{ timestamps: true },
		],
		// comments: {type: [String], default: []},
		postedBy: {
			type: ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = mongoosePost.model('Post', PostSchema);
