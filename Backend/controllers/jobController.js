import Job from "../models/Job.js";

export const createJob = async (req, res) => {

  try {

    const job = await Job.create({

      companyId: req.body.companyId,

      title: req.body.title,

      location: req.body.location,

      salary: req.body.salary,

      experience: req.body.experience,

      jobType: req.body.jobType,

      description: req.body.description,

      expiryDate: req.body.expiryDate

    });

    res.status(201).json(job);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getJobs = async (req, res) => {

  try {

    const jobs = await Job.find().populate("companyId");

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const deleteJob = async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};