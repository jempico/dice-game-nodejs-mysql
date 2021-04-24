const game = require('../../services/game');
const player = require('../../services/player');
const ranking = require('../../services/ranking');

class GameController { 
    // ADD NEW GAME
    async addGame(req, res) {
    try {
        const {id} = req.params;
        const newGame = await game.createGame(id);
        const gameId = await game.addGame(newGame)
        const succesSet = await player.setSuccess(id)
        if (succesSet == 1) { 
            const rankingUpdated = await ranking.updateRanking(id);
            res.status(200).json({
                success: true,
                text: `Game with id ${gameId} succesfully created and success rate and ranking updated!`})
        } else if (succesSet == 0) {
                res.status(400).json({ success: false, error: `Check fields. Game couldn't be added` }) }
        } catch(err) {
                res.status(400).json({ success: false, error: err }) }
    }  

    // READ ALL GAMES
    async readGames(req, res) {
    try {
        const {id} = req.params;
        let gameFound = await game.getGames(id)
        if (gameFound.length == 0) {
            res.status(400).json({
                success: false,
                data: `this user doesn't exist or doesn't have any game record yet!` })
        } else if (gameFound.length > 0){
                res.status(200).json({ success: true, data: gameFound })}
    } catch(err){
                res.status(400).json({ success: false, error: err })
    } 
}

    //DELETE ALL GAMES
    async deleteGames(req, res){
    try {
        const {id} = req.params;
        let foundPlayer = await player.getPlayer(id)
        if (foundPlayer == 0){
            res.status(400).json({ success: false, data: 'this user does not exist'})}  
        let removedGames = await game.removeGames(id)
        let successReset = await player.resetSuccess(id)
        let rankingUpdated = await ranking.updateRanking(id)
        res.status(200).json({ success: true, data: `Games succesfully removed and success rate and ranking updated` })   
    } catch(err) {
        res.status(400).json({ success: false, error: err })
    }
}
} 


module.exports = new GameController()
