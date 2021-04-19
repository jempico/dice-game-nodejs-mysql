const { default: knex } = require('knex');
const db = require('../config/dbconfig');
const randomizer = require('../helpers/randomizer')

class Game {
   constructor(id) {
      this.id_player = id;
      this.dice1 = '';
      this.dice2 = '';
      this.score = 0;
      this.result = '';
   }
   runGame(){
      this.dice1 = randomizer();
      this.dice2 = randomizer();
   }
   setScore(){
      let sumNum = this.dice1 + this.dice2;
      if (sumNum == 7) {
         this.score = 1;
         this.result= 'WIN'
      } else if (sumNum !== 7) {
         this.score = 0;  
         this.result= 'LOST'
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
   db.select('id as round', 'dice1', 'dice2', 'result').from('game').where('id_player', id)
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

const removeGames = (id, response, reject) => {
   db('game').where({'id_player': id}).del()
  .then( function(rows) { return response(rows) })
  .catch( function(error) { return reject(error)})
}

module.exports = {gameFactory, addGame, getGames, removeGames};
