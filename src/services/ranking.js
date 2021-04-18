const ranking = require('../models/ranking');

// READ PLAYERS
const readPlayers = (req, res) => {
    let result = ranking.getPlayers( 
        (response) => 
            { 
            for (obj of response) {
                if (obj.hasOwnProperty('successRate')) {
                    
                    let result2 = ranking.getTotalAverage( 
                        (response2) => {
                            for (prop of response2){
                            response2 = Number(prop[Object.getOwnPropertyNames(prop)].toFixed(2));
                            }
                            res.json({
                                success: true,
                                overall_successRate: response2,
                                data: response
                            })
                        },     
                        (reject) => {
                            res.json({
                                success: false,
                                err: reject
                            })
                        })
                
                } else {
                    res.json({
                    success: true,
                    data: response
                    })
                }
            }
            }, 
        (reject) => {
            res.json({
                success: false,
                err: reject
            })
        })
    };

const readLoser = (req, res) => {
        let result = ranking.getLoser( 
            (response) => {
                res.json({
                    success: true,
                    data: response
                })
            },     
            (reject) => {
                res.json({
                    success: false,
                    err: reject
                })
            })
        };
    
const readWinner = (req, res) => {
        let result = ranking.getWinner( 
            (response) => {
                res.json({
                    success: true,
                    data: response
                })
            },     
            (reject) => {
                res.json({
                    success: false,
                    err: reject
                })
            })
        };
    

module.exports = {readPlayers, readLoser, readWinner}