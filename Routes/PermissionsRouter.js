const router = require('express').Router();

const  PermissionsController  = require('../Controller/PermissionsController')


// From Controller
// router.get('/Permission',PermissionsController.getAllPermissions )
router.post('/get_Permission',PermissionsController.getAllPermissions )

router.post('/Permission', PermissionsController.AddNewPermission)

router.delete('/Permission', PermissionsController.DeletePermission)



module.exports = router;
