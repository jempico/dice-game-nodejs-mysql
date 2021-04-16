const { default: knex } = require('knex');
const db = require('../config/dbconfig');
const randomizer = require('../helpers/randomizer')

class Game {
   constructor(id) {
      this.id_player = id;
      this.dice1 = '';
      this.dice2 = '';
      this.result = '';
   }
   //Where should I put the range of numbers for the random Generator?
   runGame(){
      this.dice1 = randomizer();
      this.dice2 = randomizer();
   }
   setResult(){
      let sumNum = this.dice1 + this.dice2;
      if (sumNum == 7) {
      this.result = 'WIN';
      } else if (sumNum !== 7) {
      this.result = 'LOST';        
      } else {
         return `Something went wrong`;
      }
   }
}

const gameFactory = (id) => { return new Game(id) };

const addGame = (obj, response, reject)=>{
   db('game').insert(obj)
   .then( (rows) =>  response(rows) )
   .catch( (error) => reject(error))
} 

const getGames = (id, response, reject) => {
   db.select('*').from('game').where('id_player', id)
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

const removeGames = (id, response, reject) => {
   db('game').where({'id_player': id}).del()
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

module.exports = {gameFactory, addGame, getGames, removeGames};
