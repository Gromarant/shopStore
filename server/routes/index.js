const productRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');

const router = require('express').Router();

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/products', productRoutes);
  router.use('/users', usersRoutes);
}

module.exports = routerApi;