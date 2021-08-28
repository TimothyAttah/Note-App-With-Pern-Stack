const jwtAuth = require('jsonwebtoken');
const UserAuth = require('../model/UserModel');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
     return res
				.status(403)
       .json({ error: 'Unauthorized User. Permission Denied' });
  
  const token = authorization.replace('Bearer ', '');

  jwtAuth.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err)
       return res
					.status(403)
         .json({ error: 'Unauthorized User. Request Denied' });
    const { _id } = payload;
    const userData = await User.findById(_id);
    req.user = userData;
    next();
  })
}

module.exports = auth;
