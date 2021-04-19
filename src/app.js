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

// Starting the server
app.listen(process.env.PORT, ()=>{
	console.log(`server is listening on port:${process.env.PORT}`)
})