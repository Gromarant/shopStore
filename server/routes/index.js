const productRoutes = require('./productsRoutes');
const listItemsRoutes = require('./listItemsRoutes');
const pantriesRoutes = require('./pantriesRoutes');
const billsRoutes = require('./billsRoutes');

const router = require('express').Router();

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/products', productRoutes);
  router.use('/listItems', listItemsRoutes);
  router.use('/pantries', pantriesRoutes);
  router.use('/bills', billsRoutes);
}

module.exports = routerApi;