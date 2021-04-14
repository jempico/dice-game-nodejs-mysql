const playerModel = require('../models/player');


// CREATE NEW PLAYER
const readPlayer = (req, res) => {
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




module.exports = readPlayer;