const player = require('../models/player');

// READ PLAYERS
const readPlayers = (req, res) => {
        let result = player.getPlayers( 
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