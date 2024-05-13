const express = require('express');
const productRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const brandsRouter = require('./brandsRouter');
const usersRouter = require('./usersRouter');

const router = express.Router();

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/products', productRouter);
  router.use('/categories', categoriesRouter);
  router.use('/brands', brandsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;