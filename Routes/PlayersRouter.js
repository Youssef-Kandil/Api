 const router = require('express').Router();

const  PlayersController  = require('../Controller/PlayersController.js')


// From Controller
// router.get('/Players',PlayersController.getAllPlayers )
router.post('/get_Players',PlayersController.getAllPlayers )

router.post('/Players', PlayersController.AddNewPlayer)

router.delete('/Players', PlayersController.DeletePlayer)

router.put('/Players', PlayersController.updatePlayer)
router.put('/PlayersState', PlayersController.updatePlayerState)


module.exports = router;

