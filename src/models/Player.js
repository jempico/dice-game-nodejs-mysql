const { default: knex } = require('knex');
const db = require('../config/dbconfig');

const getPlayers = (response, reject) => {
     db.select('*').from('player')
    .then( function(rows) {  return response(rows) })
    .catch( function(error) {  return reject(error)})
}
const newPlayer = (obj) => db('player').insert(obj);

module.exports = {getPlayers, newPlayer};
