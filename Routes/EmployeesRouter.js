const router = require('express').Router();


// import PlayersController from '../Controller/PlayersController.mjs';
const  EmployeesController  = require('../Controller/EmployeesController')



// From Controller

// router.get('/employees',EmployeesController.getAllEmployees )
router.post('/get_employees',EmployeesController.getAllEmployees )
router.post('/employeesByID', EmployeesController.getEmployeesByID)


router.post('/employees', EmployeesController.AddNewEmployee)

router.delete('/employees', EmployeesController.DeleteEmployee)

router.put('/employees', EmployeesController.updateEmployee)


module.exports = router;