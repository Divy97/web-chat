import { generateToken } from "../config/generateToken.js";
import { User } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are compulsory");
  }

  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user?._id),
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are compulsory");
  }
  const user = await User.findOne({
    email,
  });

  if (!user) {
    res.status(400);
    throw new Error("User not exists");
  }

  const isPasswordCorrect = await user.matchPassword(password);
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Wrong Password");
  }

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user?._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

export { registerUser, loginUser };
