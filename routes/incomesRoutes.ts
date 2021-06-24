const incomesRouter = require('express').Router();
const incomesAuth = require('../middleware/auth');
const incomesController = require('../controllers/incomeControllers');

incomesRouter.post('/create', incomesAuth, incomesController.createIncomes);

module.exports = incomesRouter;
