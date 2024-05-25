const Products = require('../models/productsModel');
const responseHttpHandle = require('../utils/responseHandler');

const getProducts = async (req, res) => {
  if(req.params.productId) {
    responseHttpHandle(Products.getProductById(req.params.productId), req, res, 200);
  } else {
    responseHttpHandle(Products.getProducts(), req, res, 200);
  }
};

const createProduct = async (req, res) => responseHttpHandle(Products.createProduct(req.body), req, res, 201);

const updateProduct = async (req, res) => {
  if(req.params.productId) {
  responseHttpHandle(Products.updateProduct(req.body, req.params.productId), req, res, 200);
  }
  else {
    return;
  }
}

module.exports =  {
  getProducts,
  createProduct,
  updateProduct
}