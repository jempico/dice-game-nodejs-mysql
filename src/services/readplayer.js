const player = require('../models/player');

// READ ONE PLAYER
const readPlayer = (req, res) => {
    const {id} = req.params;
    let result = player.getPlayer(id,  
        (response) => {
            if (response.length == 0){
                res.json({
                    success: false,
                    data: 'this user does not exist'
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

module.exports = readPlayer;