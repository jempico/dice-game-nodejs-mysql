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


app.get('/players', (req,res)=> {
    console.log('Im here')
    mysqlConnection.query('SELECT * FROM players', function(err, results, fields){
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

// Starting the server
app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})