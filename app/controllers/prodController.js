// controllers/prodController.js
const Product = require('../models/prodModel');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ... (autres méthodes : deleteProduct, updateProduct, getProduct, getAllProducts)