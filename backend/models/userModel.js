import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
