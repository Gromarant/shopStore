const Products = require('../models/productsModel');

const getProducts = async (req, res, next) => {
  try {
    let product;
    if( req.params.productId ) {
      product = await Products.getProductById(req.params.productId);
    }
    else {
      product = await Products.getProducts();
    };
    res.status(200).json(product);
  }  
  catch (error) {
    console.error(`Error: ${error}`);
    res.status(error.status || 500).json({
      msj: `${error}`
    });
  };
};


module.exports =  {
  getProducts,
}