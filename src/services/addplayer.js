const Player = require('../models/Player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const mysqlConnection = require('../config/dbconfig');

// CREATE NEW PLAYER
exports.addPlayer = (req, res)=>{
    let {name} = req.body.newData;
    let {email} = req.body.newData;
    let {password} = req.body.newData;

    //Hashing password
    let hash = bcrypt.hashSync(password, 10);

    //To compare passwords:
    //console.log(bcrypt.compareSync(password, hash));

    //Checking if name is null or empty
    if (name == null || name == '') {
        name = uniqid('ANONIM-');
    } 
    mysqlConnection.query('INSERT INTO player (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, rows, fields) =>{
        if(!err) {
            res.json({
                success: true,
                text: 'Employee saved',
            })
        } else {
            res.json({
                success: true,
                text: 'Error found',
                error: err
            })
        }
    })
    
}