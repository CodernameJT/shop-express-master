import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

const app = express();
const apiRouter = require('./src/routers/api/index.api');

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

// Use the main router
app.use(router);

// Use error handling middleware
app.use(errorHandler);

// Use path handling middleware
app.use(pathHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

