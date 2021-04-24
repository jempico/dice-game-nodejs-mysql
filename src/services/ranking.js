const db = require('../config/dbconfig');


class RankingService {
    async addPlayer(id){
        let result = await db('ranking').insert({id_player: id})
        return result;
    } 
    async updateRanking(id) {
        let successDTO = db.select('successRate').from('player').where('id', id)
        let result = await db('ranking').where('id_player', '=', id).update({successRate: successDTO })
        return result;
    }
    async getLoser() {
        let minSuccess = db('ranking').min('successRate');
        let result = await db.select('id_player', 'successRate').from('ranking').where({successRate: minSuccess})
        return result;
    }
    async getWinner() {
        let maxSuccess = db('ranking').max('successRate');
        let result = await db.select('id_player', 'successRate').from('ranking').where({successRate: maxSuccess})
        return result;
    }
    async getPlayers() {
        let result = await db.select('id_player', 'successRate').from('ranking')
        return result;
    }
    async getTotalAverage() {
        let query = 'ROUND(AVG(successRate),2) AS total';
        let result = await db('ranking').select(db.raw(query))
        return result;
    }
}



module.exports = new RankingService();
