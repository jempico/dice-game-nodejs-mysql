const db = require('../config/dbconfig');

class RankingService {
    addPlayer(id, response, reject) {
        db('ranking').insert({id_player: id})
        .then( (rows) =>  response(rows) )
        .catch( (error) => reject(error))
    }
    updateRanking(id, response, reject) {
        let successDTO = db.select('successRate').from('player').where('id', id)
        db('ranking').where('id_player', '=', id).update({successRate: successDTO })
        .then( (rows) =>  response(rows)) 
        .catch( (error) => reject(error))
    }
    getLoser(response, reject) {
        db.select('id_player', 'successRate').from('ranking').where('successRate', '=', 0)
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
     }
    getWinner(response, reject) {
        let maxSuccess = db('ranking').max('successRate');
        db.select('id_player', 'successRate').from('ranking').where({successRate: maxSuccess})
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
     }
    getPlayers(response, reject) {
        db.select('id_player', 'successRate').from('ranking')
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
    }
    getTotalAverage(response, reject) {
         db('ranking').avg('successRate')
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
    }
}


module.exports = new RankingService();
