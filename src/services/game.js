const { default: knex } = require('knex');
const db = require('../config/dbconfig');

const addGame = (obj, response, reject)=>{
   db('game').insert(obj)
   .then( (rows) =>  response(rows) )
   .catch( (error) => reject(error))
} 

const getGames = (id, response, reject) => {
   db.select('id as round', 'dice1', 'dice2', 'result').from('game').where('id_player', id)
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

const removeGames = (id, response, reject) => {
   db('game').where({'id_player': id}).del()
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

module.exports = {addGame, getGames, removeGames};
