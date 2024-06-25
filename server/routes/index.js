const productRoutes = require('./productsRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const listItemsRoutes = require('./listItemsRoutes');

const router = require('express').Router();

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/products', productRoutes);
  router.use('/categories', categoriesRoutes);
  router.use('/listItems', listItemsRoutes);
}

module.exports = routerApi;