const express = require('express');
const routerApi = require('./routes');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send( 'return = Home page');
});

routerApi(app);

app.listen(port, () => {
  console.log('Server is working on port ' + port);
});