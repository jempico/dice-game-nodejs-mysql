
class Ranking {
    constructor() {
        if (Ranking.instance == null) {
            Ranking.instance = this
        } 
        return Ranking.instance
    }
}

module.exports = new Ranking();
