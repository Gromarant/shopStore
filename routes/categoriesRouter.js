const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send('return = All products order by category');
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json(
    {
      category_id: categoryId,
    }
  )
});

// router.get('/:categoryId/brands/:brandId', (req, res) => {
//   const { categoryId, brandId } = req.params;
//   res.json(
//     {
//       category_id: categoryId,
//       brand_id: brandId,
//     }
//   )
// });

module.exports = router;