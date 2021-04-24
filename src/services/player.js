const db = require('../config/dbconfig');
const PlayerModel = require('../models/player');


class PlayerService {
    async createPlayer(obj){
        let result = PlayerModel.create(obj)
        return result;
        }    
    async addPlayer(obj){
        let result = await db('player').insert(obj)
        return result;
        }
    async getPlayer(id){
        let result = await db.select('name', 'email', 'successRate').from('player').where('id', id)
        return result;
        }
    async editName(obj){
        let result = await db('player').where('name', '=', obj.name).update({name: obj.newName })
        return result;
        }
    async getPlayers(){
        let result = db.select('*').from('player')
        return result;
        }
    async setSuccess(id){
        let scoreRate = db('game').select(db.raw('ROUND(AVG(score),2)')).where({id_player: id}) 
        let result = db('player').where('id', id).update({successRate: scoreRate})
        return result;
        }
    async resetSuccess(id){
        let result = db('player').where('id', id).update({successRate: null})
        return result;
        }
}


module.exports = new PlayerService();
