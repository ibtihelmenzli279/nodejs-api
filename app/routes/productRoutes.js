// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/prodController');

router.post('/', productController.createProduct);
// ... (autres routes)

module.exports = router;