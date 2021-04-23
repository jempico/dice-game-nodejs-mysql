const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const player = require('../../services/player');
const ranking = require('../../services/ranking');
const playerFactory = require('../../models/player');

// CREATE NEW PLAYER
const addPlayer = (req, res)=>{
    const playerDTO = ({name , email ,password} = req.body.newData)
    //Hashing password
    playerDTO.password = bcrypt.hashSync(password, 10);
    //Checking if name is null or empty
    if (name == null || name == '') {
        playerDTO.name = uniqid('ANONIM-');
    } 
    //Creating an instance of Player through playerFactory
    const newPlayer = playerFactory.create(playerDTO);
    //Adding new player into DB through data access layer
    let result = player.addPlayer( newPlayer,
        (response) => {
               //Adding player to ranking
                ranking.addPlayer(response,
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
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })

    

};

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
                console.log(req.params)

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


// MODIFY PLAYER'S NAME
const editPlayer = (req, res)=>{
    const playerDTO = {
        name: req.body.currentData.name,
        newName: req.body.newData.name
    }
    
    //Modifying player's name through data access layer
    let result = player.editName( playerDTO,
        (response) => {
            res.json({
                success: true,
                text: `user name successfully modified!`
            })
        },     
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
};

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


module.exports = {addPlayer, editPlayer, readPlayer, readPlayers};