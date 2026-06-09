import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserApplications } from "../services/jobService";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      if (!user?._id) return;

      try {
        const response = await getUserApplications(user._id);
        setApplications(response.data || []);
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, [user]);

  if (loading) return <div className="text-white p-6">Loading applications...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-white mb-4">Your Applications</h1>
      {applications.length === 0 ? (
        <p className="text-slate-400">No applications found yet.</p>
      ) : (
        <div className="grid gap-5 xl:grid-cols-2">
          {applications.map((application) => (
            <div key={application._id} className="rounded-3xl bg-slate-900 p-6 border border-slate-700 shadow-sm">
              <h2 className="text-xl font-semibold text-white">{application.job?.title || "Unknown Role"}</h2>
              <p className="mt-2 text-slate-400">Company: {application.job?.companyName || "Unknown"}</p>
              <p className="mt-4 text-slate-300">Status: <span className="font-semibold text-lime-300">{application.status || "pending"}</span></p>
              <p className="mt-2 text-sm text-slate-500">Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
