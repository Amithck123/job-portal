import React from "react";
import { Outlet } from "react-router-dom";

import DeveloperSidebar from "../../components/Developer/DeveloperSidebar";
import DeveloperNavbar from "../../components/Developer/DeveloperNavbar";

const DeveloperLayout = () => {
  return (
    <div className="flex bg-[#0a0a0a] min-h-screen">

      <DeveloperSidebar />

      <div className="flex-1">
        <DeveloperNavbar />

        <div className="p-8">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default DeveloperLayout;