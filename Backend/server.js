import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import your existing and new routes (with .js extensions)
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Register all API routes
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use(
  cors({
    origin: "https://jobportal.vercel.app",
    credentials: true,
  })
);
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/jobportal") // Tip: Added a database name 'jobportal' here so it saves nicely
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start Server
app.listen(5000, () => {
  console.log("Server Running on port 5000");
});