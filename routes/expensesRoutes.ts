const expensesRouter = require('express').Router();
const expensesAuth = require('../middleware/auth');
const expensesController = require('../controllers/expensesController');

expensesRouter.post('/create', expensesAuth, expensesController.createExpenses);

expensesRouter.get('/', expensesAuth, expensesController.getExpenses);

expensesRouter.put('/edit/:id', expensesAuth, expensesController.editExpenses);

expensesRouter.delete(
	'/delete/:id',
	expensesAuth,
	expensesController.deleteExpenses
);

module.exports = expensesRouter;
