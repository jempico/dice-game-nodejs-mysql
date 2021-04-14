const db = require('../config/dbconfig');

const newPlayer = (obj) => db('player').insert(obj);

module.exports = newPlayer;
