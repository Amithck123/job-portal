import { FaBell } from "react-icons/fa";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  // REMOVED: const user = JSON.parse(localStorage.getItem("user"));
  
  // Keep this, as it safely pulls the user and logout function from your context
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Job Portal</h1>

      <div className="flex items-center gap-4">
        <h2>Welcome, {user?.name}</h2>
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;