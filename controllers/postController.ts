const Post = require('../model/PostModel');
const UserPost = require('../model/UserModel');

const postControllers = {
  createPost: async (req: any, res: any) => {
    try {
      const newPost = req.body;
      const { userId, desc, img } = newPost;
      req.user.password = undefined;
      const post = await new Post({
        userId,
        desc,
        img,
        postedBy: req.user
      })
      await post.save();
      res.status(200).json({message: 'New post created', post})
    } catch (err) {
      return res.status(500).json({error: err})
    }
  }
}

module.exports = postControllers;
