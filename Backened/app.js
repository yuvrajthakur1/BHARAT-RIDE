const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/map.routes');
const rideRoutes = require('./routes/ride.routes');
//it is a middleware
const cookieParser = require('cookie-parser');

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
  res.send("Hello World");
})




//List Of Routes For Your Website

//Use Of USer ROuter Form Every EveryWhere
app.use('/users',userRoutes);


//Use Of captain routes

app.use('/captain',captainRoutes)



// Using Google Api Route

app.use('/maps',mapsRoutes);

//rid eko use karre hei

app.use('/rides',rideRoutes);

module.exports = app;