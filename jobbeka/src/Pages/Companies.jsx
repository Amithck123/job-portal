import React, { useEffect, useState } from "react";
import { getAllCompanies } from "../services/companyService";
import { getJobs } from "../services/jobService";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companiesRes, jobsRes] = await Promise.all([getAllCompanies(), getJobs()]);
        setCompanies(companiesRes.data || []);
        setJobs(jobsRes.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6 text-white">Loading companies...</div>;

  const jobsByCompany = jobs.reduce((acc, job) => {
    const cid = job.company?._id || job.company;
    if (!cid) return acc;
    if (!acc[cid]) acc[cid] = [];
    acc[cid].push(job);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-white mb-4">Companies</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div key={company._id} className="rounded-3xl bg-slate-900 p-6 border border-slate-700 shadow-sm">
            <h2 className="text-xl font-semibold text-white">{company.companyName}</h2>
            <p className="mt-2 text-slate-400">{company.description}</p>
            <p className="mt-3 text-slate-300">Location: {company.location}</p>

            <div className="mt-4">
              <h3 className="text-lg text-white mb-2">Jobs</h3>
              { (jobsByCompany[company._id] || []).length === 0 ? (
                <p className="text-slate-400">No jobs posted yet for this company.</p>
              ) : (
                <ul className="space-y-2">
                  {(jobsByCompany[company._id] || []).map((job) => (
                    <li key={job._id} className="rounded-xl bg-slate-800 p-3 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{job.title}</p>
                          <p className="text-slate-400 text-sm">{job.location}</p>
                        </div>
                        <div className="text-slate-300 text-sm">{job.salary || "-"}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
