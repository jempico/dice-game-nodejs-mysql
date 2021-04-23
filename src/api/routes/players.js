const express = require('express');
const router = express.Router();
const player = require('../controllers/player');
const game = require('../controllers/game')
const ranking = require('../controllers/ranking')

//const player = require('../controllers/singleplayer');
//const updateplayer = require('../controllers/updateplayer');
//const deleteplayer = require('../controllers/deleteplayer');
//const addgame = require('../controllers/addgame');

router
    .route("/")
    .get(player.readPlayers)
    .post(player.addPlayer)
    .put(player.editPlayer)

router    
    .route("/ranking")
    .get(ranking.readPlayers)


router    
    .route("/ranking/loser")
    .get(ranking.readLoser)

router    
    .route("/ranking/winner")
    .get(ranking.readWinner)

router
    .route("/:id")
    .get(player.readPlayer)

router
    .route("/:id/games")
    .post(game.addGame)
    .get(game.readGames)
    .delete(game.deleteGames)



module.exports = router;