const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const player = require('../models/player');


// CREATE NEW PLAYER
const addPlayer = (req, res)=>{
    const playerDTO = ({name , email ,password} = req.body.newData)
    
    //Hashing password
    playerDTO.password = bcrypt.hashSync(password, 10);
    //To compare passwords:
    //console.log(bcrypt.compareSync(password, hash));

    //Checking if name is null or empty
    if (name == null || name == '') {
        playerDTO.name = uniqid('ANONIM-');
    } 

    //Creating an instance of Player through playerFactory
    const newPlayer = player.playerFactory(playerDTO);

    //Adding new player into DB through data access layer

    let result = player.addPlayer( newPlayer,
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