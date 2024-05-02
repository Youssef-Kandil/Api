const router = require('express').Router();

const  ReportsMangmentController  = require('../Controller/ReportsMangmentControler')


// From Controller
// router.get('/report',ReportsMangmentController.getIN_OUT_Report )
router.post('/get_report',ReportsMangmentController.getIN_OUT_Report )

router.post('/SalaryReport', ReportsMangmentController.getSalary_Report)
router.post('/SelesReport', ReportsMangmentController.getSales_Report)
router.post('/ExpensesReport', ReportsMangmentController.getExpenses_Report)



module.exports = router;