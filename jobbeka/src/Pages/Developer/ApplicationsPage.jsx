import React, { useContext, useEffect, useState } from "react";
import { getDeveloperApplications } from "../../services/jobService";
import { AuthContext } from "../../context/AuthContext";

const ApplicationsPage = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?._id) return;

      try {
        const res = await getDeveloperApplications(user._id);
        setApplications(res.data || []);
      } catch (error) {
        console.error("Error fetching developer applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Applications Received</h1>
        <p className="text-slate-400 mt-2">These are the applicants for the jobs you posted.</p>
      </div>

      {loading ? (
        <p>Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-slate-400">No applications yet.</p>
      ) : (
        <div className="grid gap-5">
          {applications.map((app) => (
            <div key={app._id} className="rounded-3xl bg-slate-900 p-6 border border-slate-700 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-white">{app.job?.title || "Unknown Job"}</h2>
                  <p className="text-slate-400">Applicant: {app.applicant?.name || "Unknown"}</p>
                </div>
                <span className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-200">
                  {app.status || "pending"}
                </span>
              </div>
              <div className="mt-4 text-slate-300">
                <p>Email: {app.applicant?.email || "Not available"}</p>
                <p className="mt-2 text-sm text-slate-500">Applied on: {new Date(app.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
