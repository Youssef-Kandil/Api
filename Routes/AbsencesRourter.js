const router = require('express').Router();

const  AbsenceController  = require('../Controller/AbsenceController')


// From Controller
// router.get('/absence',AbsenceController.getAllAbsences )
router.post('/get_absence',AbsenceController.getAllAbsences )

router.post('/absence', AbsenceController.AddNewAbsence)

router.delete('/absence', AbsenceController.DeleteAbsence)



module.exports = router;