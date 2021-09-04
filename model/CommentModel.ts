const mongooseComments = require('mongoose');
const  UserObjectId  = mongooseComments.Schema.Types.ObjectId;

const CommentsSchema = new mongooseComments.Schema(
	{
		text: {
			type: String,
		},
		postedBy: {
			type: UserObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = mongooseComments.model('Comments', CommentsSchema)
