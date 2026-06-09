import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Welcome Back
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="bg-slate-800 p-4 rounded-xl text-white outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="bg-slate-800 p-4 rounded-xl text-white outline-none"
          />

          <button className="bg-cyan-500 hover:bg-cyan-400 transition-all py-4 rounded-xl text-white font-semibold">
            Login
          </button>

        </div>

      </div>
    </div>
  );
};

export default Login;