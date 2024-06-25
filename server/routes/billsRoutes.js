const express = require('express');
const { getBill, createBill, updateBill, deleteBill } = require('../controllers/billsController');

const router = express.Router();

router.get('/:id', getBill);
router.post('/', createBill);
router.put('/:id', updateBill);
router.delete('/:id', deleteBill);

module.exports = router;