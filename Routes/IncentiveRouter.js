const router = require('express').Router();


const  IncentiveController  = require('../Controller/IncentiveController')



// From Controller
// router.get('/Incentive',IncentiveController.getAllIncentives )
router.post('/get_Incentive',IncentiveController.getAllIncentives )
router.post('/IncentiveBYEmpID',IncentiveController.getIncentiveByEmpID )

 router.post('/Incentive', IncentiveController.AddNewIncentive)

 router.delete('/Incentive', IncentiveController.DeleteIncentive)


module.exports = router;