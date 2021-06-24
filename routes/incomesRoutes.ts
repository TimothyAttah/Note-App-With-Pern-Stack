const incomesRouter = require('express').Router();
const incomesAuth = require('../middleware/auth');
const incomesController = require('../controllers/incomeControllers');

incomesRouter.post('/create', incomesAuth, incomesController.createIncomes);

incomesRouter.get('/', incomesAuth, incomesController.getIncomes);

incomesRouter.put('/edit/:id', incomesAuth, incomesController.editIncomes);

incomesRouter.delete('/delete/:id', incomesAuth, incomesController.deleteIncomes);

module.exports = incomesRouter;
