const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data from collections.json and products.json
const collectionsData = JSON.parse(fs.readFileSync('./data/collections.json', 'utf8'));
const productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/', (req, res) => {
  res.render('index', { collections: collectionsData });
});

module.exports = router;
