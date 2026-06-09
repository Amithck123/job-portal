import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import DeveloperSidebar from "../../components/Sidebar/DeveloperSidebar";
import { AuthContext } from "../../context/AuthContext";

const DeveloperLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If not a developer, redirect back to home
    if (!user || user?.role?.toLowerCase() !== "developer") {
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen bg-slate-950">

      <DeveloperSidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DeveloperLayout;