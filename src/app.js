//******** THINGS TODO ********/
//-1 Cambiar callback por async/await.
    //Ref: https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd
//-2 estructura
//-3 Postman Tests
//-4 eslint

const express= require('express');
const app= express();
const PORT = process.env.PORT || 3000

// Config
app.use(express.json());

// Routes
const playersRoute = require('./routes/players')

// Middlewares
app.use('/players', playersRoute);

/*
app.get('/', (req,res)=> {
    mysqlConnection.query('DESCRIBE players', (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})*/

// Starting the server
app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})