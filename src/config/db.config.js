const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dicegame'
})

mysqlConnection.connect((err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Mysql Db is connected')
    }
})

module.exports = mysqlConnection;