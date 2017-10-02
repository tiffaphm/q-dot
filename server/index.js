const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
const db = require('../database');


// Uncomment funciton below for dropping all tables from database
//However it does not work with tables that have relationships

// db.dropAllTables();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`(>^.^)> Server now listening on ${port}!`);
});