import express from "express";
import Company from "../models/Company.js";

const router = express.Router();

// Create Company
router.post("/", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    console.error("Company Creation Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get Companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
