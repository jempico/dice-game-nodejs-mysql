const Player = require('../models/Player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const newPlayer = require('../models/player');


// CREATE NEW PLAYER
const addPlayer = (req, res)=>{
    const player = ({name , email ,password} = req.body.newData)

    // //Hashing password
    // let hash = bcrypt.hashSync(password, 10);

    // //To compare passwords:
    // //console.log(bcrypt.compareSync(password, hash));

    // //Checking if name is null or empty
    // if (name == null || name == '') {
    //     name = uniqid('ANONIM-');
    // } 


    return newPlayer.newPlayer(player)
        .then((res) => res.json({
            success: true,
            text: 'Employee saved',
            }))
        .catch((err) => res.json(err))
};

module.exports = addPlayer;


//     XXX.query('INSERT INTO player (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, rows, fields) =>{
//         if(!err) {
//             res.json({
//                 success: true,
//                 text: 'Employee saved',
//             })
//         } else {
//             res.json({
//                 success: true,
//                 text: 'Error found',
//                 error: err
//             })
//         }
//     })
    
// }