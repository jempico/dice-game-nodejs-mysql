const { default: knex } = require('knex');
const db = require('../config/dbconfig');

const addPlayer = (obj, response, reject)=>{
   db('player').insert(obj)
   .then( (rows) =>  response(rows) )
   .catch( (error) => reject(error))
} 
const getPlayer = (id, response, reject) => {
   db.select('name', 'email', 'successRate').from('player').where('id', id)
  .then( (rows) =>  response(rows) )
  .catch( (error) => reject(error) )
}
const getPlayers = (response, reject) => {
   db.select('*').from('player')
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}
const editName = (obj, response, reject) => {
   db('player').where('name', '=', obj.name).update({name: obj.newName })
   .then( function(rows) { return response(rows) })
   .catch( function(error) { return reject(error)})
}

const setSuccess = (id, response, reject) => {
let scoreRate = db('game').select(db.raw('ROUND(AVG(score),2)')).where({id_player: id}) 
   db('player').where('id', id).update({successRate: scoreRate})
   .then( function(rows) {    return response(rows) })
   .catch( function(error) { return reject(error)})
}
module.exports = {addPlayer, getPlayer, getPlayers, editName, setSuccess};
