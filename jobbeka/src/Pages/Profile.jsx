import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-black/20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <img
            src={user?.avatar || "https://i.pravatar.cc/120"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-slate-700 object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold">{user?.name || "Guest User"}</h1>
            <p className="mt-2 text-slate-400">{user?.role ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Account` : "No role assigned"}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-5 text-slate-300">
          <p className="text-sm uppercase tracking-[0.2em] text-lime-400">Member since</p>
          <p className="mt-3 text-lg font-semibold text-white">
            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-slate-400">Email</p>
          <p className="mt-2 text-white">{user?.email || "Not available"}</p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Profile Details</h2>
          <p className="text-slate-400">Role</p>
          <p className="mt-2 text-white">{user?.role || "Not assigned"}</p>
          <p className="mt-4 text-slate-400">User ID</p>
          <p className="mt-2 text-white break-all">{user?._id || "Not available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;