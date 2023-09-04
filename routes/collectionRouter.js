const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data from collections.json and products.json
const collectionsData = JSON.parse(fs.readFileSync('./data/collections.json', 'utf8'));
const productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/:collectionId', (req, res) => {
  const collectionId = req.params.collectionId;
  const collection = collectionsData.find((col) => col.id === collectionId);

  if (!collection) {
    res.status(404).send('Collection not found');
    return;
  }

  // Filter products that belong to the current collection
  const collectionProducts = productsData.filter((product) =>
    collection.products.includes(product.id)
  );

  res.render('collection', { collection, collectionProducts });
});

module.exports = router;
