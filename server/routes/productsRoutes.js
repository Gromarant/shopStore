const express = require('express');
const { getProducts, createProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/:productId?', getProducts);
router.post('/', createProduct);

module.exports = router;