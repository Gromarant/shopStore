const express = require('express');
const { getProducts, createProduct, updateProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/:productId?', getProducts);
router.post('/', createProduct);
router.put('/:productId', updateProduct);

module.exports = router;