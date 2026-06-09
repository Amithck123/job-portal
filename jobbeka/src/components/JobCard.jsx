import React from "react";

const JobCard = ({ job, user, onApply }) => {
  const companyName = job.companyName || job.company?.companyName || "Unknown Company";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20 text-white">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-xl font-bold text-lime-300">
          {companyName.charAt(0)}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{companyName}</p>
          <h3 className="text-2xl font-semibold mt-2">{job.title}</h3>
        </div>
      </div>

      <p className="mt-5 text-slate-400">{job.description || "No description available."}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <span className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-300">Location: {job.location || "Remote"}</span>
        <span className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-300">Salary: {job.salary || "Negotiable"}</span>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          onClick={onApply}
          className="w-full rounded-3xl bg-lime-500 px-5 py-3 font-semibold text-black transition hover:bg-lime-400"
        >
          Apply
        </button>
        <button className="w-full rounded-3xl border border-slate-700 bg-transparent px-5 py-3 text-white transition hover:border-lime-400">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
