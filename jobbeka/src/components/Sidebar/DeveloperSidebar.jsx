import React from "react";
import { Link } from "react-router-dom";

const DeveloperSidebar = () => {
  return (
    <div className="w-64 bg-slate-900 min-h-screen text-white p-5">

      <h1 className="text-3xl font-bold mb-8">
        Developer Panel
      </h1>

      <div className="flex flex-col gap-5">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/dashboard/jobs">
          Manage Jobs
        </Link>

        <Link to="/dashboard/companies">
          Companies
        </Link>

        <Link to="/dashboard/applications">
          Applications
        </Link>

      </div>

    </div>
  );
};

export default DeveloperSidebar;