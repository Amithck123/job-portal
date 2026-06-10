import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
<img src="/logoo-removebg-preview.png" alt="Logo" className="h-10 w-25" />
      <div className="flex items-center gap-4">
        <h2>Welcome, {user?.name}</h2>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;