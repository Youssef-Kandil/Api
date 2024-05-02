const router = require('express').Router();


const  DirectDeductionController  = require('../Controller/DirectDeductionController')



// From Controller
// router.get('/DirectDeduction',DirectDeductionController.getAllDirectDeductions )

router.post('/get_DirectDeduction',DirectDeductionController.getAllDirectDeductions )
router.post('/DirectDeductionBYEmpID',DirectDeductionController.getDirectDeductionByEmpID )

 router.post('/DirectDeduction', DirectDeductionController.AddNewDirectDeduction)

 router.delete('/DirectDeduction', DirectDeductionController.DeleteDirectDeduction)


module.exports = router;