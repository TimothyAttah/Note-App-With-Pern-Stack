const router = require('express').Router();
const authUserControllers = require('../controllers/authControllers');
// const todosController = require('../controllers/todosController');
const auth = require('../middleware/auth');

router.post('/signup', authUserControllers.signUp);

router.post('/signin', authUserControllers.signIn);

router.get('/', authUserControllers.getUsers);

router.get('/user', auth, authUserControllers.getAuthUser);

// router.post('/create', auth, todosController.createTodos);

module.exports = router;
