const router = require('express').Router();


// import PlayersController from '../Controller/PlayersController.mjs';
const  ItemsController  = require('../Controller/ItemsController')



// From Controller
router.post('/itemsWITHcategoryID',ItemsController.getItems_With_CATEGORY_ID )
router.post('/CategoryBYitemBareCode',ItemsController.getCategoryBYitemBareCode )
router.delete('/deleteItemWithBareCode',ItemsController.DeleteItemWithBareCode )


router.post('/items', ItemsController.AddNewItem)

router.delete('/items', ItemsController.DeleteItem)

router.put('/items', ItemsController.updateItem)


module.exports = router;