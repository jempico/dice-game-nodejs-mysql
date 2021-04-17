const db = require('../config/dbconfig');

class Ranking {
    constructor() {
        if (Ranking.instance == null) {
            Ranking.instance = this
        } 
        return Ranking.instance
    }
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
    getPlayer(id, response, reject) {
        db.select('*').from('ranking').where('id', id)
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
     }
    getPlayers(response, reject) {
        db.select('*').from('ranking')
       .then( function(rows) { return response(rows) })
       .catch( function(error) { return reject(error)})
    }
}

const ranking = new Ranking();

Object.freeze(ranking)

module.exports = ranking;