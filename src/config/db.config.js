const mysql2 = require('mysql2');

const mysqlConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pandatron89',
    database: 'dicegame',
    insecureAuth : true
});

mysqlConnection.connect(function(err) {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Mysql Db is connected')
    }
});

module.exports = mysqlConnection;