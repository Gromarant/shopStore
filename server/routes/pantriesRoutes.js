const express = require('express');
const { getPantry, createPantry, updatePantry, deletePantry } = require('../controllers/pantriesController');

const router = express.Router();

router.get('/:id', getPantry);
router.post('/', createPantry);
router.put('/:id', updatePantry);
router.delete('/:id', deletePantry);

module.exports = router;