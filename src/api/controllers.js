const express = require('express');
const router = express.Router();
const addPlayer = require('../services/addPlayer');
//const player = require('../controllers/singleplayer');
//const updateplayer = require('../controllers/updateplayer');
//const deleteplayer = require('../controllers/deleteplayer');
//const addgame = require('../controllers/addgame');

router
    .route("/")
    .post(addPlayer.addPlayer)


module.exports = router;