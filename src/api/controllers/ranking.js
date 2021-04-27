const ranking = require('../../services/ranking');

class RankingController {
    // READ PLAYERS
    async readPlayers(req, res) {
        try {
            const rankedPlayers = await ranking.getPlayers()
            const totalAverageObj = await ranking.getTotalAverage()
            let totalAverageNum = "";
            totalAverageObj.forEach(obj => totalAverageNum = obj.total )
            res.status(200).json({ success: true, overall_successRate: totalAverageNum, ranking: rankedPlayers })
        } catch(err) {
            res.status(400).json({ success: false, error: err})}
    }

    // READ PLAYER WITH LOWEST SUCCESS RATE
    async readLoser(req, res) {
        try {
            const loser = await ranking.getLoser() 
            res.status(200).json({ success: true, data: loser })
        } catch(err) {
            res.status(400).json({ success: false, error: err})
        }
    }

    // READ PLAYER WITH HIGHEST SUCCESS RATE
    async readWinner(req, res) {
        try {
            const winner = await ranking.getWinner() 
            res.status(200).json({ success: true, data: winner })
        } catch(err) {
            res.status(400).json({ success: false, error: err})
        }
    }
}
    

module.exports = new RankingController()
