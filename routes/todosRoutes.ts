const todosRouter = require('express').Router();
const todosAuth = require('../middleware/auth');
const todosController = require('../controllers/todosController');

todosRouter.post('/create', todosAuth, todosController.createTodos);

module.exports = todosRouter;
