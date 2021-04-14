const Player = require('../models/Player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const playerModel = require('../models/player');


// CREATE NEW PLAYER
const addPlayer = (req, res)=>{
    const player = ({name , email ,password} = req.body.newData)

    //Hashing password
    player.password = bcrypt.hashSync(password, 10);
    //To compare passwords:
    //console.log(bcrypt.compareSync(password, hash));

    //Checking if name is null or empty
    if (name == null || name == '') {
        player.name = uniqid('ANONIM-');
    } 

    let result = playerModel.addPlayer( player,
        (response) => {
            res.json({
                success: true,
                text: `user with id ${response} successfully created!`
            })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
    
};

module.exports = addPlayer;