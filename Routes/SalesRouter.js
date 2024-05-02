const router = require('express').Router();

const  SalesController  = require('../Controller/SalesController')



// From Controller
// router.get('/sales',SalesController.getAllSales )
router.post('/get_sales',SalesController.getAllSales )

router.post('/sales', SalesController.AddNewSales)

router.delete('/sales', SalesController.DeleteSales)

router.put('/sales', SalesController.updateSales)


module.exports = router;
