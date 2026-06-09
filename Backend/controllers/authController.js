import bcrypt from "bcryptjs";

import User from "../models/User.js";
import Developer from "../models/Developer.js";
import authRoutes from "./routes/authRoutes.js";

export const signup = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Developer Signup

    if (role === "developer") {

      const developerExists = await Developer.findOne({
        email
      });

      if (developerExists) {

        return res.status(400).json({
          message: "Developer already exists"
        });

      }

      const developer = await Developer.create({

        email,

        password: hashedPassword,

        role: "developer"

      });

      return res.status(201).json({
        message: "Developer Created",
        developer
      });

    }

    // User Signup

    const userExists = await User.findOne({
      email
    });

    if (userExists) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const user = await User.create({

      name,

      email,

      password: hashedPassword,

      role: "user"

    });

    res.status(201).json({
      message: "User Created",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};