import React from "react";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          Total Users
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Companies
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Jobs Posted
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Reports
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;