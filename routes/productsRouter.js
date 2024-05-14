const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/filter', (req, res) => {
  res.status(200).send('I am a filter');
});

router.get('/:productId?', (req, res) => {
  const { productId } = req.params;

  if( productId ) {
     res.status(200).json(
      {
        id: productId,
      }
    )
  }
  else {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
  
    for(let index = 0; index < limit; index++) {
      const productId = Math.floor(Math.random() * 10001);
  
      products.push(
        {
          id: productId,
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl(),
        }
      )
    }
    res.status(200).json( products );
  }
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json(
    {
      message: 'created product with id: ' + body.id,
      data: body,
    }
  )
});

router.patch('/:productId', (req, res) => {
  const { productId } = req.params;

  res.status(200).json({
    message: 'Product with id:' + productId + ' updated',
    data: req.body,
    id: productId,
  })
});

router.put('/:productId', (req, res) => {
  const { productId } = req.params;

  res.status(200).json({
    message: 'Product with id:' + productId + ' updated',
    data: req.body,
    id: productId,
  })
});

router.delete('/:productId', (req,res) => {
  const productId = req.params;

  res.status(200).json({
    message: 'Product deleted',
    id: productId,
  })
});


module.exports = router;