const express = require('express');
const { getListItems, putListItems, deleteListItems } = require('../controllers/listItemsController');

const router = express.Router();

router.get('/', getListItems);
router.post('/', putListItems);
router.delete('/', deleteListItems);

module.exports = router;