import React, { useContext, useEffect, useState } from "react";
import { getJobs, applyJob } from "../services/jobService";
import { getAllCompanies } from "../services/companyService";
import { AuthContext } from "../context/AuthContext";
import JobCard from "../components/JobCard";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobRes, companyRes] = await Promise.all([getJobs(), getAllCompanies()]);
        setJobs(jobRes.data || []);
        setCompanies(companyRes.data || []);
      } catch (error) {
        console.error("Failed to load home data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApply = async (jobId) => {
    if (!user?._id) {
      alert("Please login to apply for jobs.");
      return;
    }

    try {
      await applyJob({ job: jobId, applicant: user._id });
      alert("Applied successfully.");
    } catch (error) {
      console.error(error);
      alert("Could not apply. Please try again.");
    }
  };

  if (loading) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="space-y-8 p-6">
      <section className="rounded-3xl bg-slate-900 p-6 shadow-lg shadow-black/25">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-white">Discover the best matching jobs</h1>
            <p className="mt-3 text-slate-400 max-w-2xl">
              Browse open roles, view top companies, and apply with one click. Your applications are saved in MongoDB.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-5 text-slate-300 max-w-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-lime-400">Logged in as</p>
            <p className="mt-3 text-lg font-semibold">{user?.name || "Guest"}</p>
            <p className="text-slate-500 mt-1">{user?.role || "Visitor"}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-white">Top Companies</h2>
          <p className="text-sm text-slate-500">Featured partners</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companies.length ? (
            companies.map((company) => (
              <div key={company._id} className="rounded-3xl bg-slate-900 p-6 border border-slate-700 shadow-sm">
                <h3 className="text-xl font-semibold text-white">{company.companyName}</h3>
                <p className="mt-3 text-slate-400 line-clamp-3">{company.description}</p>
                <p className="mt-4 text-slate-300">Location: {company.location}</p>
                {company.website && (
                  <a href={company.website} target="_blank" rel="noreferrer" className="mt-3 inline-block text-lime-400 underline">
                    Visit website
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-slate-400">No companies available yet.</p>
          )}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-white">Open Jobs</h2>
          <p className="text-sm text-slate-500">{jobs.length} positions available</p>
        </div>
        {jobs.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} user={user} onApply={() => handleApply(job._id)} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-slate-900 p-6 text-slate-400">No jobs posted yet.</div>
        )}
      </section>
    </div>
  );
};

export default Home;
