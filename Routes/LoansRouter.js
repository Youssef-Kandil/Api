const router = require('express').Router();

const  LoansController  = require('../Controller/LoansController.js')


// From Controller
// router.get('/loans',LoansController.getAllLoans )
router.post('/get_loans',LoansController.getAllLoans )

router.post('/loans', LoansController.AddNewLoans)

router.delete('/loans', LoansController.DeleteLoans)

router.put('/loans', LoansController.updateLoans)



module.exports = router;