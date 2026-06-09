import Application from "../models/Application.js";
import User from "../models/User.js";

// 1. APPLY FOR A JOB (Updated to use req.user.id)
export const applyJob = async (req, res) => {
  try {
    const { jobId, companyId } = req.body;

    // Create the application using the logged-in user's ID from middleware
    const application = await Application.create({
      applicant: req.user.id, // <-- Changed from userId to match your schema & middleware
      job: jobId,
      company: companyId,
    });

    // Automatically push this application ID to the User's appliedJobs list
    const user = await User.findById(req.user.id);
    if (user) {
      user.appliedJobs.push(application._id);
      await user.save();
    }

    res.status(201).json({
      success: true,
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// 2. GET CURRENTLY LOGGED-IN USER'S APPLICATIONS
export const myApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.user.id, // <-- Dynamically secures data per user
    }).populate("job");

    res.json(applications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 3. GET SPECIFIC USER APPLICATIONS (For Admin/Company views)
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.params.userId, // <-- Aligned to use 'applicant' instead of 'userId'
    })
      .populate("job")
      .populate("company");

    res.status(200).json(applications);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};