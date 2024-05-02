const router = require('express').Router();


const  DeductionController  = require('../Controller/DeductionController')



// From Controller
// router.get('/Deduction',DeductionController.getAllDeductions )

router.post('/get_Deduction',DeductionController.getAllDeductions )
router.post('/DeductionBYEmpID',DeductionController.getDeductionByEmpID )

 router.post('/Deduction', DeductionController.AddNewDeduction)

 router.delete('/Deduction', DeductionController.DeleteDeduction)


module.exports = router;