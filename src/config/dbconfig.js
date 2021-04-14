const knexfile = require('./knexfile');
const knex = require('knex');

// Don't access knexfile.development directly without
// updating env vars before.
const db = knex(knexfile.development);

// ({
//     client: 'mysql2',
//     connection: {
//       host : process.env.DB_HOST,
//       user : process.env.DB_USER,
//       password : process.env.DB_PASS,
//       database : process.env.DB_NAME
//     },
//     pool: {min: 0, max:10},
//   });

module.exports = db;


// const mysql2 = require('mysql2');

// const mysqlConnection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'dicegame',
//     insecureAuth : true
// });

// mysqlConnection.connect(function(err) {
//     if(err){
//         console.log(err);
//     } 
//     console.log('Mysql Db is connected')
// });

// module.exports = mysqlConnection;