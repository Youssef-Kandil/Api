const router = require('express').Router();



const  IN_OUTController  = require('../Controller/IN_OUTControler')



// From Controller
router.post('/in_out',IN_OUTController.handel_IN_OUT)
router.post('/inANDEmpData',IN_OUTController.get_IN_Time_And_Emp_Data)
router.post('/out',IN_OUTController.handel_OUT)

//  router.get('/in_out',IN_OUTController.get_IN_OUT)
router.post('/get_in_out',IN_OUTController.get_IN_OUT)


// router.delete('/deleteItemWithBareCode',ItemsController.DeleteItemWithBareCode )


// router.post('/items', ItemsController.AddNewItem)

// router.delete('/items', ItemsController.DeleteItem)

// router.put('/items', ItemsController.updateItem)


module.exports = router;