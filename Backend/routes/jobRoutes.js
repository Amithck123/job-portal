import express from "express";
// Import your Job model (Remember the mandatory .js extension for ES Modules!)
import Job from "../models/Job.js"; 
// Keeping deleteJob since you are using it in the router.delete route below
import { deleteJob } from "../controllers/jobController.js";

const router = express.Router();

// POST: Create a new job
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
});

// GET: Fetch all jobs and populate company details
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("company");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

// GET: Fetch a single job by its ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("company");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job details", error });
  }
});

// DELETE: Delete a job using your controller function
router.delete("/:id", deleteJob);

// Export the router using ES Modules syntax
export default router;