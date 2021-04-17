const game = require('../models/game');
const player = require('../models/player');
const ranking = require('../models/ranking')
// ADD NEW GAME

const addGame = (req, res)=>{
    const {id} = req.params;
     
    //Creating an instance of Game through gameFactory
    const newGame = game.gameFactory(id);
    //Running game
    newGame.runGame();
    //Setting up score
    newGame.setScore();

    let result = game.addGame( newGame,
        (response) => {
            res.json({
                success: true,
                text: `Game successfully created!`
            })
            console.log(response)
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
    
    
    //Settinp up player's SuccessRate
    player.setSuccess(id,
        (response) => {
            res.json({
                success: true,
                text: `Game succesfully created and success rate updated`
            })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })


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
};


const readGames = (req, res) => {
    const {id} = req.params;
    let result = game.getGames(id, 
        (response) => {
            if (response.length == 0){
                res.json({
                    success: false,
                    data: `this user hasn't played yet!`
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
            res.json({
                success: true,
                text: `Games succesfully removed`
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