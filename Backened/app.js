const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

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

app.get('/new',(req,res)=>{
  res.send("<h1>Hello New</h1>");
})




app.use('/users',userRoutes);


module.exports = app;