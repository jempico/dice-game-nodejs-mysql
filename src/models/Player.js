const { default: knex } = require('knex');
const db = require('../config/dbconfig');

class Player {
   constructor(obj) {
      this.name = obj.name;
      this.email = obj.email;
      this.password = obj.password;
      this.games = 0;
      this.wins = 0;
      this.successRate = 0;
   }
   // checkIfInstance(x) {
   //    console.log(this instanceof x);
   // }
}

const playerFactory = (obj) => { return new Player(obj) };


const getPlayer = (id, response, reject) => {
     db.select('*').from('player').where('id', id)
    .then( function(rows) { return response(rows) })
    .catch( function(error) { return reject(error)})
}

const addPlayer = (obj, response, reject) => {
   db('player').insert(obj)
   .then( function(id) { response(id) })
   .catch( function(error) { return reject(error)})
} 

const getPlayers = (response, reject) => {
    db.select('*').from('player')
   .then( function(rows) { return response(rows) })
   .catch( function(error) { return reject(error)})
}

module.exports = Player;
module.exports = {getPlayers, addPlayer, getPlayer, playerFactory};
