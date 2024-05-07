const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('return = All products order by brand');
});

router.get('/:brandId', (req, res) => {
  const { brandId } = req.params;
  res.json(
    {
      brand_id: brandId,
    }
  )
});

module.exports = router;