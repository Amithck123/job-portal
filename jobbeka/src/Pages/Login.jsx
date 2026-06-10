import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError("");       

    try {
      const res = await loginUser(formData);
      const userData = res.data?.user || res.data;

      if (!userData) {
        throw new Error("No user data received from server.");
      }

      login(userData);

      const role = userData.role?.toLowerCase().trim();

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "developer") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(
        err.response?.data?.message || 
        err.message || 
        "Invalid email or password. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-linear-to-r from-black via-slate-900 to-black ">
<img src="/logoo-removebg-preview.png" alt="Logo" className="max-w-full h-auto object-contain max-h-300px" />
      <div className="w-full max-w-md  bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 flex-col justfy-start  " >
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Login to your account
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={formData.email} 
            placeholder="Enter Email"
            className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-500"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password} 
            placeholder="Enter Password"
            className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-500"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-4 rounded-lg text-white font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?
          <Link to="/signup" className="text-blue-400 ml-2 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;