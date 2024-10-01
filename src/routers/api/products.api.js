// src/routers/api/products.api.js
import express from 'express';
import ProductManager from '../../data/products.manager.js'; // Ensure correct import
import isValidData from '../../middlewares/isValidData.mid.js';
import errorHandler from '../../middlewares/errorHandler.mid.js';

const router = express.Router();
const productManager = new ProductManager(); // Create an instance of the class

// POST /api/products endpoint
router.post('/', isValidData, (req, res) => {
  try {
    const newProduct = productManager.create(req.body);
    res.status(201).json({
      id: newProduct.id,
      message: 'Product successfully created'
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// GET /api/products endpoint
router.get('/', (req, res) => {
  try {
    const products = productManager.read();
    res.status(200).json({
      statusCode: 200,
      response: products
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// GET /api/products/:pid endpoint
router.get('/:pid', (req, res) => {
  try {
    const product = productManager.readOne(req.params.pid);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// PUT /api/products/:pid endpoint
router.put('/:pid', isValidData, (req, res) => {
  try {
    const updatedProduct = productManager.update(req.params.pid, req.body);
    if (updatedProduct) {
      res.status(200).json({
        statusCode: 200,
        response: updatedProduct
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// DELETE /api/products/:pid endpoint
router.delete('/:pid', (req, res) => {
  try {
    const isDeleted = productManager.destroy(req.params.pid);
    if (isDeleted) {
      res.status(200).json({
        statusCode: 200,
        message: 'Product successfully deleted'
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

export default router;