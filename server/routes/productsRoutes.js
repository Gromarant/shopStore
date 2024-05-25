const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/:productId?', getProducts);
router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;