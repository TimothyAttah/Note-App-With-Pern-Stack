const jwtTokens = require('jsonwebtoken')

const authentication = (req: any, res: any, next: any) => {
  try {
    const jwtToken = req.headers('Authorization')
    if (!jwtToken) return res.status(403).json({ error: 'Not Authorized' });
    const payload = jwtTokens.verify(jwtToken, process.env.JWT_SECRET)
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err)
    res.status(403).json({ error: 'Not Authorized' });
  }
}