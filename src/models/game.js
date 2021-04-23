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

class GameFactory{
   create(obj) {
      return new Game(obj);
   }
}

module.exports = new GameFactory();
