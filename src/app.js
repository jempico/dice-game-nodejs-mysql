//******** THINGS TODO ********/
//-1 Cambiar callback por async/await.
    //Ref: https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd
//-2 estructura
//-3 Postman Tests
//-4 eslint

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
    mysqlConnection.query('SELECT * FROM players', function(err, results){
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
    mysqlConnection.query('SELECT * FROM players WHERE id = ?', [id], (err, results) => {
        res.json({
            success: true,
            data: results
        })
    })
})

app.post('/players', (req, res)=>{
    const {name} = req.body.newData;
    const query = 'CALL addEmployee(?)' 
    const query2 = 'CALL readPlayer(?)'
    mysqlConnection.query(query, [name], (err, rows, fields) =>{
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
// Starting the server
app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})