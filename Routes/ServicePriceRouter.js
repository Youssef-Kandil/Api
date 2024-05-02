const router = require('express').Router();


// import PlayersController from '../Controller/PlayersController.mjs';
const  ServicePriceController  = require('../Controller/ServicePriceController')



// From Controller
// router.get('/ServicePrice',ServicePriceController.getAllServicePrice )
router.post('/get_ServicePrice',ServicePriceController.getAllServicePrice )

router.post('/ServicePrice', ServicePriceController.AddNewServicePrice)

// router.delete('/ServicePrice', ServicePriceController.DeletePlayer)

 router.put('/ServicePrice', ServicePriceController.updateServicePrice)


module.exports = router;
