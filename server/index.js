const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
const db = require('../database/index.js');
// const Promise = require('bluebird');
const dummyData = require('../database/dummydata.js');

// Uncomment funciton below for dropping all tables from database
//However it does not work with tables that have relationships

// db.dropAllTables();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/restaurants/:restaurantid', (req, res) => {
  db.findInfoForOneRestaurant(req.params.restaurantid)
    .then(results => res.send(results))
    .catch(error => {
      console.log('error getting info for one restaurants', error);
      res.send('failed for one restaurant');
    });  
});

app.get('/restaurants', (req, res) => {
  db.findInfoForAllRestaurants()
    .then(restaurants => res.send(restaurants))
    .catch(error => {
      console.log('error getting info for all restaurants', error);
      res.send('failed for info on all restaurants');
    });  
});

app.post('/dummydata', (req, res) => {
  dummyData.addRestaurants()
    .then(result => dummyData.addCustomers())
    .then(result => dummyData.addToQueue())
    .then(result => {
      console.log('ADDDDEEEEEEEEEEEEDDDDDDDDDD', result);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error posting dummydata', error);
      res.send('could not add dummydata');
    });
});

app.listen(port, () => {
  console.log(`(>^.^)> Server now listening on ${port}!`);
});