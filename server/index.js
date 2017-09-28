const express = require('express');
const path = require('path');
const app = express();
const port = 1337;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`(>^.^)> Server now listening on ${port}!`);
});