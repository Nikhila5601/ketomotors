import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default:"admin"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = new mongoose.model("User", userSchema, "users");

export default User;
