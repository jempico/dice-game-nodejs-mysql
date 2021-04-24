const db = require('../config/dbconfig');
const gameFactory = require('../models/game');

class GameService {
    async createGame(id){
        let result = gameFactory.create(id)
        result.runGame();
        result.setScore();
        return result;
    }  
        
    async addGame(obj){
        let result = await db('game').insert(obj)
        return result;
    }  
    
    async getGames(id){
        let result = await db.select('id', 'dice1', 'dice2', 'result').from('game').where('id_player', id)
        return result;
    } 

    async removeGames(id) {
        let result = await db('game').where({'id_player': id}).del()
        return result;
    } 
}


module.exports = new GameService();
