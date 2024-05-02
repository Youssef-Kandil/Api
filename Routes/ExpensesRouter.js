const router = require('express').Router();

const  ExpensesController  = require('../Controller/ExpensesController')



// From Controller
// router.get('/expenses',ExpensesController.getAllExpenses)
router.post('/get_expenses',ExpensesController.getAllExpenses)

router.post('/expenses', ExpensesController.AddNewExpenses)

router.delete('/expenses', ExpensesController.DeleteExpenses)

router.put('/expenses', ExpensesController.updateExpenses)


module.exports = router;
