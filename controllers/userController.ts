const User = require('../model/UserModel');
const UserPosts = require('../model/PostModel');

const userControllers = {
  getUser: async (req: any, res: any) => {
    try {
      
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }
}

module.exports = userControllers;