// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }

    // Verify token (assuming "Bearer <token>" format)
    const decoded = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET
    );

    // Fetch user details from DB and attach to the request object
    req.user = await User.findById(decoded.id).select("-password"); // Tip: .select("-password") hides the hashed password for safety

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized token",
    });
  }
};

export default protect;