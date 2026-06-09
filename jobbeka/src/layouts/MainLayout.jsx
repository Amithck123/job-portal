import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/UsersSidebar";
import { AuthContext } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If a developer somehow lands on user pages, redirect to developer dashboard
    if (user?.role?.toLowerCase() === "developer") {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          {/* Prefer Outlet for nested routes; fall back to children if provided */}
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;