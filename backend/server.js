import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home page data",
  });
});

app.get("/api/chats", (req, res) => {
  res.status(200).json({
    chats,
  });
});

app.get("/api/chats/:id", (req, res) => {
  let singleChat = chats.find((c) => c._id == req.params?.id);

  res.status(200).json({
    singleChat,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
