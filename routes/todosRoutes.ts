const todosRouter = require('express').Router();
const todosAuth = require('../middleware/auth');
const todosController = require('../controllers/todosController');

todosRouter.post('/create', todosAuth, todosController.createTodos);

// todosRouter.get('/', todosController.getTodos);

todosRouter.get('/', todosController.getAllTodos);

todosRouter.get('/auth', todosAuth, todosController.getMyTodos);

todosRouter.put('/update/:id', todosAuth, todosController.updateTodos);

todosRouter.delete('/delete/:id', todosAuth, todosController.deleteTodos);

module.exports = todosRouter;
