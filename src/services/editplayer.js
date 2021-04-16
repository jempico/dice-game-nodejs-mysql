const player = require('../models/player');


// MODIFY PLAYER'S NAME
const editPlayer = (req, res)=>{
    const playerDTO = ({name , newName} = req.body.newData)


    //Modifying player's name through data access layer

    let result = player.editName( playerDTO,
        (response) => {
            res.json({
                success: true,
                text: `user with name ${response} successfully modified!`
            })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })

};

module.exports = editPlayer;