const router = require('express').Router();


const  CategoriesController  = require('../Controller/CategoriesController')



// From Controller
// router.get('/Categories',CategoriesController.getAllCategories_AND_Items )
router.post('/get_Categories',CategoriesController.getAllCategories_AND_Items )

 router.post('/Categories', CategoriesController.AddNewCategory)

 router.delete('/Categories', CategoriesController.DeleteCategory)

 router.put('/Categories', CategoriesController.updateCategory)


module.exports = router;