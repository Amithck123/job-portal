// src/components/JobCard/JobCard.jsx
import React from "react";
import { motion } from "framer-motion";
import API from "../../api/axios.js"; // <-- Changed from "../" to "../../"

const JobCard = ({ job }) => {
const handleApply = async (jobId, companyId) => {
  try {
    
    const res = await API.post("/application/apply", { jobId, companyId });
    
    if (res.data.success) {
      alert("Applied successfully!");
    }
  } catch (error) {
    console.error("Error applying for job:", error.response?.data?.message || error.message);
  }
};

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl"
    >
      <div className="flex items-center gap-4">
        <img
          src={job.logo}
          className="w-14 h-14 rounded-xl"
        />

        <div>
          <h2 className="text-white text-xl font-bold">
            {job.title}
          </h2>

          <p className="text-gray-400">
            {job.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full">
          ₹ {job.salary}
        </span>

        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full">
          {job.experience}
        </span>
      </div>

     <button
  onClick={() =>
    applyJob({
      userId: user._id,
      jobId: job._id,
      companyId: job.companyId._id
    })
  }
  className="bg-lime-400 text-black px-4 py-2 rounded"
>
  Apply Now
</button>
    </motion.div>
  );
};

export default JobCard;