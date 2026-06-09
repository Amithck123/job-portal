import express from "express";
import Application from "../models/Application.js";
import Job from "../models/Job.js";

const router = express.Router();

// Create an application
router.post("/", async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User applications by user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const apps = await Application.find({ applicant: req.params.userId }).populate("job");
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Applications for jobs created by a developer
router.get("/developer/:developerId", async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.params.developerId }).select("_id");
    const jobIds = jobs.map((job) => job._id);
    const apps = await Application.find({ job: { $in: jobIds } })
      .populate("job")
      .populate("applicant");

    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
