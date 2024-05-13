const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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
  res.json( products );
});

router.get('/filter', (req, res) => {
  res.send('I am a filter');
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      id: productId,
    }
  )
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json(
    {
      message: 'created product with id: ' + body.id,
      data: body
    }
  )
})


module.exports = router;