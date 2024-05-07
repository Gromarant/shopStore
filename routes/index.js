const productRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const brandsRouter = require('./brandsRouter');
const usersRouter = require('./usersRouter');

const routerApi = (app) => {
  app.use('/products', productRouter);
  app.use('/categories', categoriesRouter);
  app.use('/brands', brandsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;