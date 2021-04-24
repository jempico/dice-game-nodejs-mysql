const bcrypt = require('bcrypt');
const uniqid = require('uniqid');

class Player {
   constructor(obj) {
      console.log(obj)
      if (obj.name == null || obj.name == '') {
         this.name = uniqid('ANONIM-');
     } else {
      this.name = obj.name;
     } 
      this.email = obj.email;
      this.password = bcrypt.hashSync(obj.password
         , 10);
      this.successRate = 0;
   }
}

class PlayerFactory {
   create(obj) {
      return new Player(obj)
   }
}

module.exports = new PlayerFactory();
