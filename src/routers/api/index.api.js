import express from 'express';
import productsApiRouter from './products.api.js'; // Ensure .js extension
import usersApiRouter from './users.api.js'; // Ensure .js extension

const apiRouter = express.Router();

apiRouter.use('/products', productsApiRouter);
apiRouter.use('/users', usersApiRouter);

export default apiRouter;