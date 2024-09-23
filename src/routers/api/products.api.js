import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  destroyProduct,
} from "../../controllers/products.controller.js";
import isValidData from "../../middlewares/isValidData.mid.js";

// src/routers/api/products.api.js
const express = require('express');
const router = express.Router();
const ProductManager = require('../../data/products.manager');
const isValidData = require('../../middlewares/isValidData.mid');
const errorHandler = require('../../middlewares/errorHandler.mid');

// POST /api/products endpoint
router.post('/', isValidData, (req, res) => {
  try {
    const newProduct = ProductManager.create(req.body);
    res.status(201).json({
      id: newProduct.id,
      message: 'Product successfully created'
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
});

// GET /api/products endpoint
router.get('/', (req, res) => {
  try {
    const products = ProductManager.read();
    const { category } = req.query;

    let filteredProducts = products;
    if (category) {
      filteredProducts = products.filter(product => product.category === category);
    }

    res.status(200).json({
      statusCode: 200,
      response: filteredProducts
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});


router.get('/:pid', (req, res) => {
  try {
    const product = ProductManager.readOne(req.params.pid);
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
    const updatedProduct = ProductManager.update(req.params.pid, req.body);
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
    const deletedProduct = ProductManager.delete(req.params.pid);
    if (deletedProduct) {
      res.status(200).json({
        statusCode: 200,
        response: deletedProduct
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;

/*
const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:pid", getProduct);
productsRouter.post("/", isValidData, createProduct);
// antes de que se ejecute createProduct
// tiene que ejecutarse el middleware de validacion de datos (isValidData)
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", destroyProduct);
*/
export default productsRouter;
