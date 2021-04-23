
class Player {
   constructor(obj) {
      this.name = obj.name;
      this.email = obj.email;
      this.password = obj.password;
      this.successRate = 0;
   }
}

class PlayerFactory {
   create(obj) {
      return new Player(obj)
   }
}

module.exports = new PlayerFactory();
