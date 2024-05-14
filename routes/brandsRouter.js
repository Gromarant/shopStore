const express = require('express');

const router = express.Router();

router.get('/filter', (req, res) => {
  res.status(200).send('this is a brand filter');
});

router.get('/:brandId?', (req, res) => {
  const { brandId } = req.params;

  if( brandId ) {
    res.status(200).json(
      {
        brand_id: brandId,
      }
    )
  }
  else {
    res.status(200).send('return = All products order by brand');
  }
});

router.post('/', (req,res) => {
  const body = req.body;

  res.status(201).json(
    {
      message: 'created brand with id: ' + body.id,
      data: body,
    }
  )
});

router.patch('/:brandId', (req,res) => {
  const { brandId } = req.params;

  res.status(200).json(
    {
      message: 'Brand with id:' + brandId + ' updated',
      data: req.body,
      id: brandId,
    }
  )
});

router.put('/:brandId', (req,res) => {
  const { brandId } = req.params;

  res.status(200).json(
    {
      message: 'Brand with id:' + brandId + ' updated',
      data: req.body,
      id: brandId,
    }
  )
});

router.delete('/:brandId', (req,res) => {
  const { brandId } = req.params;

  res.status(200).json(
    {
      message: "Product deleted",
      id: brandId,
    }
  )
});

module.exports = router;