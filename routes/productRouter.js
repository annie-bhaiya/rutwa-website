const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data from collections.json and products.json
const collectionsData = JSON.parse(fs.readFileSync('./data/collections.json', 'utf8'));
const productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = productsData.find((prod) => prod.id === productId);

  if (!product) {
    res.status(404).send('Product not found');
    return;
  }

  res.render('product', { product });
});

module.exports = router;
