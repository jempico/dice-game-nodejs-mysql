//******** THINGS TODO ********/
//-0 Optimizar query Average Success
//-1 Testing Errors
//-2 Cambiar callback por async/await.
    //Ref: https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd
//-2 Cambiar stored procedures
//-3 Postman Tests

const uniqid = require('uniqid');
const express= require('express');
const app= express();
const PORT = process.env.PORT || 3000
const mysqlConnection = require('./config/db.config');

// Config
app.use(express.json());

// Routes
//const playersRoute = require('./routes/players')

// Middlewares
//app.use('/players', playersRoute);


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

app.post('/players', (req, res)=>{
    let {name} = req.body.newData;
    let {email} = req.body.newData;
    let {password} = req.body.newData;
    
    //Checking if name is null or empty
    if (name == null || name == '') {
        console.log('null name');
        name = uniqid('ANONIM-');
    } 
    mysqlConnection.query('INSERT INTO player (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, rows, fields) =>{
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



// Starting the server
app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})