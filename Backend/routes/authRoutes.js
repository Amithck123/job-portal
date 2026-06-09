import express from "express";
import bcrypt from "bcryptjs";

import User from "../models/User.js";

const router = express.Router();


// SIGNUP ROUTE

router.post("/signup", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    // Check Existing User

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User

    const user = await User.create({

      name,

      email,

      password: hashedPassword,

      role: role || "user"

    });

    res.status(201).json({

      success: true,

      message: "Signup Successful",

      user

    });

  }catch (error) {
  console.error("SIGNUP ERROR:", error);

  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}

});


// LOGIN ROUTE

router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid Email"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password"
      });

    }

    res.status(200).json({

      success: true,

      message: "Login Successful",

      user

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login Failed"
    });

  }

});


// IMPORTANT

export default router;