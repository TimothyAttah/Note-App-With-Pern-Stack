const router = require('express').Router();
const authUserControllers = require('../controllers/authControllers');
const auth = require('../middleware/auth');

router.post('/signup', authUserControllers.signUp);

router.post('/signin', authUserControllers.signIn);

router.get('/', authUserControllers.getUsers);

router.get('/user', auth,  authUserControllers.getAuthUser);

module.exports = router;
