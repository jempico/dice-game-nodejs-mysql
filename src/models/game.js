const { default: knex } = require('knex');
const db = require('../config/dbconfig');

class Game {
   constructor(obj) {
      this.id_player = obj.id_player;
      this.dice1 = obj.dice1;
      this.dice2 = obj.dice2;
      this.result = obj.result;
   }
   addGame(obj, response, reject){
    db('game').insert(obj)
    .then( function(rows) { response(rows) })
    .catch( function(error) { return reject(error)})
   } 
    getGame(id, response, reject){
    db.select('*').from('game').where('id', id)
    .then( function(rows) { return response(rows) })
    .catch( function(error) { return reject(error)})
 }
}

const gameFactory = (obj) => { return new Game(obj) };

module.exports = {gameFactory};
