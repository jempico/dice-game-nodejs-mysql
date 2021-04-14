const express = require('express');
const router = express.Router();
const addPlayer = require('../services/addplayer');
//const player = require('../controllers/singleplayer');
//const updateplayer = require('../controllers/updateplayer');
//const deleteplayer = require('../controllers/deleteplayer');
//const addgame = require('../controllers/addgame');

router
    .route("/")
    .post(addPlayer)


module.exports = router;