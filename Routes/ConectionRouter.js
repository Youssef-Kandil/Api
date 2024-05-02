const router = require('express').Router();


// import PlayersController from '../Controller/PlayersController.mjs';
const  ConectionController  = require('../Controller/ConectionController')



// From Controller

// router.get('/connection',EmployeesController.getAllEmployees )
router.post('/connection', ConectionController.AddNewConnection)
// router.delete('/connection', EmployeesController.DeleteEmployee)
// router.put('/connection', EmployeesController.updateEmployee)


module.exports = router;