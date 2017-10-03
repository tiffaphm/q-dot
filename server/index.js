const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
const db = require('../database/index.js');


// Uncomment funciton below for dropping all tables from database
//However it does not work with tables that have relationships

// db.dropAllTables();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/restaurants/:restaurantid', (req, res) => {
  db.findInfoForOneRestaurant(req.params.restaurantid)
    .then(results => res.send(results));
});

app.get('/restaurants', (req, res) => {
  db.findInfoForAllRestaurants()
    .then(restaurants => res.send(restaurants))
    .catch(error => console.log('error getting info for all restaurants', err));  
});

app.post('/dummydata', (req, res) => {
  db.addDummyData();
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`(>^.^)> Server now listening on ${port}!`);
});