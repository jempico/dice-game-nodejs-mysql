const { default: knex } = require('knex');
const db = require('../config/dbconfig');



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


module.exports = {getPlayers, addPlayer, getPlayer};
