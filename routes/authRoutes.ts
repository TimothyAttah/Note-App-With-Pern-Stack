const router = require('express').Router();
const authUserControllers = require('../controllers/authControllers');

router.post('/signup', authUserControllers.signUp);

router.post('/signin', authUserControllers.signIn);

module.exports = router;
