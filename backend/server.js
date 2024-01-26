import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.middleware.js";
const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.json())
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home page data",
  });
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
