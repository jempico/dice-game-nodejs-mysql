const ranking = require('../models/ranking');

// READ PLAYERS
const readPlayers = (req, res) => {
    let result = ranking.getPlayers( 
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




module.exports = {readPlayers}