import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./src/routers/api/index.api.js"; // Ensure .js extension
import errorHandler from "./src/middlewares/errorHandler.mid.js"; // Ensure .js extension
import pathHandler from "./src/middlewares/pathHandler.mid.js"; // Ensure .js extension

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter); // Use /api prefix for API routes

// Use error handling middleware
app.use(errorHandler);

// Use path handling middleware
app.use(pathHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

