const express = require('express');
const router = express.Router();
const addPlayer = require('../../services/addplayer');
const readPlayers = require('../../services/readplayers');
const readPlayer = require('../../services/readplayer')
//const player = require('../controllers/singleplayer');
//const updateplayer = require('../controllers/updateplayer');
//const deleteplayer = require('../controllers/deleteplayer');
//const addgame = require('../controllers/addgame');

router
    .route("/")
    .get(readPlayers)
    .post(addPlayer)

router
    .route("/:id")
    .get(readPlayer)
module.exports = router;