import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Portal</h1>
      <nav className="flex flex-col gap-4">
        <Link className="rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-700" to="/home">
          Home
        </Link>
        <Link className="rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-700" to="/home">
          Jobs
        </Link>
        <Link className="rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-700" to="/companies">
          Companies
        </Link>
        <Link className="rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-700" to="/profile">
          My Profile
        </Link>
        <Link className="rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-700" to="/applied-jobs">
          Applied Jobs
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
