const { default: knex } = require('knex');
const db = require('../config/dbconfig');

class Player {
   constructor(obj) {
      this.name = obj.name;
      this.email = obj.email;
      this.password = obj.password
   }
   addPlayer(obj, response, reject){
      db('player').insert(obj)
      .then( (rows) =>  response(rows) )
      .catch( (error) => reject(error))
   } 
   getPlayer(id, response, reject){
      db.select('*').from('player').where('id', id)
     .then( (rows) =>  response(rows) )
     .catch( (error) => reject(error) )
   }
   getPlayers(response, reject){
      db.select('*').from('player')
     .then( function(rows) { return response(rows) })
     .catch( function(error) { return reject(error)})
  }
}

const playerFactory = (obj) => { return new Player(obj) };

module.exports = {playerFactory};
