import { Router } from "express";
import productsRouter from "./products.api.js";
import usersApiRouter from "./users.api.js";
import cartsApiRouter from "./carts.api.js";

const apiRouter = Router();

// src/routers/api/index.api.js
const express = require('express');
const router = express.Router();

router.use('/products', require('./products.api'));
router.use('/users', require('./users.api'));
// Add other routes here

module.exports = router;

/*
apiRouter.use("/products", productsRouter);
apiRouter.use("/carts", cartsApiRouter);
apiRouter.use("/users", usersApiRouter);
*/
export default apiRouter;
