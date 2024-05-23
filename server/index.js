const express = require('express');
const routerApi = require('./routes');
const { error404, errorServer } = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
  res.send( 'return = Home page');
})

app.use(error404);
app.use(errorServer);

app.listen(port, () => {
  console.log('Server is working on port ' + port);
});