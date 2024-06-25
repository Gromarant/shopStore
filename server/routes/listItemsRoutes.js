const express = require('express');
const { getListItems, createListItems, updateListItems, deleteListItems } = require('../controllers/listItemsController');

const router = express.Router();

router.get('/:id', getListItems);
router.post('/', createListItems);
router.put('/:id', updateListItems);
router.delete('/:id', deleteListItems);

module.exports = router;