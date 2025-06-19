// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../model/product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  const { name, description, price, image } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    image
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('❌ Error saving product:', err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
