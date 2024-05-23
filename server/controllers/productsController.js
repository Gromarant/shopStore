const Products = require('../models/productsModel');
const executeModel = require('../utils/modelExecutor');

const getProducts = async (req, res) => {
  if(req.params.productId) {
    executeModel(Products.getProductById(req.params.productId), req, res);
  } else {
    executeModel(Products.getProducts(), req, res);
  }
};

const createProduct = async (req, res) => executeModel(Products.getProducts(Products.createProduct()), req, res);


module.exports =  {
  getProducts,
  createProduct
}