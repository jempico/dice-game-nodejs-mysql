const game = require('../models/game');

// ADD NEW GAME
const addGame = (req, res)=>{
    const {id} = req.params;

    //Creating an instance of Game through gameFactory
    const newGame = game.gameFactory(parseInt(id));
    console.log(newGame);

    //Running game
    newGame.runGame();

    //Setting up result
    newGame.setResult();

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

};

module.exports = addGame;