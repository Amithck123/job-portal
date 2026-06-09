import React, { useContext, useState } from "react";
import { createJob } from "../../services/jobService";
import { AuthContext } from "../../context/AuthContext";

const JobsPage = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    description: "",
    salary: "",
    location: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createJob({
        ...formData,
        createdBy: user?._id,
      });
      setMessage("Job posted successfully.");
      setFormData({
        title: "",
        companyName: "",
        description: "",
        salary: "",
        location: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Unable to post job. Please try again.");
    }
  };

  return (
    <div className="text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Post a New Job</h1>
        <p className="text-slate-400 mt-2">Create a job listing and let users apply from the home page.</p>
      </div>

      {message && (
        <div className="mb-6 rounded-3xl border border-lime-500/20 bg-lime-500/10 p-4 text-lime-200">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Job Title"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />

        <input
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          placeholder="Company Name"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />

        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Job Description"
          className="min-h-150px rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />

        <div className="grid gap-4 md:grid-cols-2">
          <input
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Location"
            className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          />
          <input
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            placeholder="Salary"
            className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          />
        </div>

        <button className="w-fit rounded-3xl bg-lime-500 px-6 py-3 font-semibold text-black transition hover:bg-lime-400">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobsPage;
