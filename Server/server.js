const express = require('express');
const bodyParser = require('body-parser');


const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use( (req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
  next();
} );

app.use('/feed',feedRoutes);

// Set up connection to database.
// const db = require('./database');




app.listen(8080);