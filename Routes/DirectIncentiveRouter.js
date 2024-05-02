const router = require('express').Router();


const  DirectIncentiveController  = require('../Controller/DirectIncentiveController')



// From Controller
// router.get('/DirectIncentive',DirectIncentiveController.getAllDirectIncentives )
router.post('/get_DirectIncentive',DirectIncentiveController.getAllDirectIncentives )
router.post('/DirectIncentiveBYEmpID',DirectIncentiveController.getDirectIncentiveByEmpID )

 router.post('/DirectIncentive', DirectIncentiveController.AddNewDirectIncentive)

 router.delete('/DirectIncentive', DirectIncentiveController.DeleteDirectIncentive)


module.exports = router;