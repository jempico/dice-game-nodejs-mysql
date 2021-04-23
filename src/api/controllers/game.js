const game = require('../../services/game');
const player = require('../../services/player');
const ranking = require('../../services/ranking');
const gameFactory = require('../../models/game');

// ADD NEW GAME

const addGame = (req, res)=>{
    const {id} = req.params;
     
    //Creating an instance of Game through gameFactory
    const newGame = gameFactory.create(id);
    //Running game
    newGame.runGame();
    //Setting up score
    newGame.setScore();

    let result = game.addGame( newGame,
        (response) => {
            //Settinp up player's SuccessRate
            player.setSuccess(id,
                (response) => {
                        //Updating Ranking
                        ranking.updateRanking(id, 
                            (response) => {
                                res.json({
                                    success: true,
                                    text: `Game succesfully created, success rate and ranking updated`
                                })
                            },     
                            (reject) => {
                                res.json({
                                    success: false,
                                    err: reject
                                })
                            })
                },     
                (reject) => {
                    res.json({
                        success: false,
                        err: reject
                    })
                })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
    
    




};


const readGames = (req, res) => {
    const {id} = req.params;
    let result = game.getGames(id, 
        (response) => {
            if (response.length == 0){
                res.json({
                    success: false,
                    data: `this user doesn't have any game record yet!`
                })
            } else {
                res.json({
                    success: true,
                    data: response
                })                
            }
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
}

//DELETE GAME
const deleteGames = (req, res)=>{
    const {id} = req.params;
    
    //Removing games through data access layer
    let result = game.removeGames(id,
        (response) => {
              //Setting back successRate to 0
              player.setSuccess(id,
                (response) => {
                        //Updating Ranking
                        ranking.updateRanking(id, 
                            (response) => {
                                res.json({
                                    success: true,
                                    text: `Games succesfully removed, success rate and ranking updated`
                                })
                            },     
                            (reject) => {
                                res.json({
                                    success: false,
                                    err: reject
                                })
                            })
                },     
                (reject) => {
                    res.json({
                        success: false,
                        err: reject
                    })
                })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })



};

module.exports = {addGame, readGames, deleteGames};