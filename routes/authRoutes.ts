const router = require('express').Router();
const authRoutes = require('../controllers/authController');

router.post('/signup', authRoutes.signUp);

router.post('/signin', authRoutes.signIn);

module.exports = router;