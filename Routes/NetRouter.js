const router = require('express').Router();


// import PlayersController from '../Controller/PlayersController.mjs';
const  NetController  = require('../Controller/NetController')






router.post('/net', NetController.AddNet)




module.exports = router;