import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Building2, BriefcaseBusiness, FileText } from "lucide-react";

const DeveloperSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${
      isActive ? "bg-lime-500/15 text-lime-300" : "text-slate-200 hover:bg-white/5"
    }`;

  return (
    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-lime-400">JobBeka</h1>
        <p className="text-sm text-slate-500 mt-2">Developer portal</p>
      </div>
      <div className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/companies" className={linkClass}>
          <Building2 size={18} />
          <span>Companies</span>
        </NavLink>
        <NavLink to="/dashboard/jobs" className={linkClass}>
          <BriefcaseBusiness size={18} />
          <span>Post Job</span>
        </NavLink>
        <NavLink to="/dashboard/applications" className={linkClass}>
          <FileText size={18} />
          <span>Applications</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DeveloperSidebar;
