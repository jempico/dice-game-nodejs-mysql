const player = require('../../services/player');
const ranking = require('../../services/ranking');

class playerController { 

//CREATE PLAYER
    async addPlayer(req, res){
        try {
        const playerDTO = {
            name: req.body.newData.name, 
            email: req.body.newData.email, 
            password: req.body.newData.password 
        } 
        const newPlayer = await player.createPlayer(playerDTO)
        const playerId = await player.addPlayer(newPlayer)
        const playerRankedId = await ranking.addPlayer(playerId)   

        res.status(200).json({
            success: true,
            text: `user  with id ${playerRankedId} created and added to ranking!`
            })
        } 
        catch(err) {
            res.status(400).json({ success: false, error: err})}
        }  
    
    
// READ ONE PLAYER
    async readPlayer(req, res) {
        try{
        const {id} = req.params;
        let foundPlayer = await player.getPlayer(id)
        if (foundPlayer == 0){
            res.status(400).json({ success: false, data: 'this user does not exist'})
        } else {
            res.status(200).json({ success: true, data: foundPlayer })                
        }}  
        catch(err) {
            res.status(400).json({ success: false, error: err }) }
        }  
    
    
    // MODIFY PLAYER'S NAME
   async editPlayer(req, res){
        try{
        const playerDTO = {
            name: req.body.currentData.name,
            newName: req.body.newData.name
        }
        let result = await player.editName(playerDTO)
        if (result == 1) {  
            res.status(200).json({
                success: true,
                text: `user name successfully modified!`
            })
        } else if (result ==0) {
            res.status(400).json({
                success: false,
                text: `Check fields, name couldn't be modified :(`
            }) 
        }}  
        catch(err) {
            res.status(400).json({ success: false, error: err }) }
        }  
    
    
// READ ALL PLAYERS
    async readPlayers(req, res) {
        try{
        let playersList = await player.getPlayers()
        if (playersList.length == 0) {
            res.status(200).json({
                success: true,
                players: 'There is no player registered yet!'
            }) 
        } else if (playersList.length > 0) {         
            res.status(200).json({ success: true, players: playersList })
        }}  
        catch(err) {
            res.status(400).json({ success: false, error: err }) }
        }  
} 


module.exports = new playerController()
