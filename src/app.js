const express= require('express');
const app= express();
const dotenv = require('dotenv');

// Config
app.use(express.json());
dotenv.config();

// Routes
const playersRoute = require('./api/routes/players')

// Middlewares
app.use('/players', playersRoute);


/*
//Get all players
app.get('/players', (req,res)=> {
    mysqlConnection.query('SELECT * FROM player', function(err, results){
        if (err){
            res.json({
              success: false,
              message: err
            })
          } else if (!results){
            res.json({
              success: false,
              message: "Not Found"
            })
          } else {
            res.json({
                success: true,
                data: results 
            })
          }
    })
})

app.get('/players/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM player WHERE id = ?', [id], (err, results) => {
        res.json({
            success: true,
            data: results
        })
    })
})



app.delete('/players/:id', (req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM player WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.json({
            success: false,
            error: err
            })
        } else {
        res.json({
            success: true,
            text: 'User successfully deleted'   
        })
        }
    })
})

app.post('/players/:id/games', (req, res) =>{
    const {id} = req.params;
    const {dice1} = req.body.newData;
    const {dice2} = req.body.newData;
    let query = 'INSERT INTO game (id_player, dice1, dice2) VALUES (?, ?, ?)';
    mysqlConnection.query(query, [id, dice1, dice2], (err, rows, fields) => {
        if(!err) {
            res.json({
                success: true,
                text: 'Game saved',
                game: fields
            })
        } else {
            res.json({
                success: true,
                text: 'Error found',
                error: err
            })
        }
    })
})
*/ 

// Starting the server
app.listen(process.env.PORT, ()=>{
	console.log(`server is listening on port:${process.env.PORT}`)
})