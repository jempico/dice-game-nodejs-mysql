const playerModel = require('../models/player');

// READ PLAYERS
const readPlayers = (req, res) => {
        let result = playerModel.getPlayers( 
            (response) => {
                res.json({
                    success: true,
                    data: response
                })
            },     
            (reject) => {
                res.json({
                    success: false,
                    err: reject
                })
            })
        };



module.exports = readPlayers;