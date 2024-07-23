const express = require('express');
const { getListItems, updateListProductsFromShop, putListItems, deleteListItems } = require('../controllers/listItemsController');

const router = express.Router();

router.get('/', getListItems);
router.put('/', updateListProductsFromShop);
router.post('/', putListItems);
router.delete('/', deleteListItems);

module.exports = router;