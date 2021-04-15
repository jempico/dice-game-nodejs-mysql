const db = require('../config/dbconfig');

class Ranking {
    constructor() {
        if (Ranking.instance == null) {
            Ranking.instance = this
        } 
        return Ranking.instance
    }
}

const ranking = new Ranking();

Object.freeze(ranking)

module.exports = ranking;