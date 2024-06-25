const Products = require('../models/productsModel');
const { responseHandler } = require('../utils');


const getProducts = async (req, res) => {
  if(req.params.id) {
    responseHandler(Products.getProductById(req.params.id), req, res, 200);
  } else if(req.params.pattern) {
    responseHandler(Products.getProductByMatch(req.params.pattern), req, res, 200);
  } else {
    responseHandler(Products.getProducts(), req, res, 200);
  };
};

const createProduct = async (req, res) => responseHandler(Products.createProduct(req.body), req, res, 201);

const updateProduct = async (req, res) => {
  if(req.params.id) {
  responseHandler(Products.updateProduct(req.body, req.params.id), req, res, 200);
  }
  else {
    return;
  };
};

const deleteProduct = async (req, res) => {
  if(req.params.id) {
    responseHandler(Products.deleteProduct(req.params.id), req, res, 200);
  };
};

module.exports =  {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}