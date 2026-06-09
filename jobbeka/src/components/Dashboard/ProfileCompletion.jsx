import React from "react";

const ProfileCompletion = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 mt-8">
      <h2 className="text-white text-xl font-bold">
        Profile Completion
      </h2>

      <div className="w-full h-3 bg-slate-700 rounded-full mt-4">
        <div className="w-[70%] h-3 bg-cyan-500 rounded-full"></div>
      </div>

      <p className="text-gray-400 mt-3">
        70% Completed
      </p>
    </div>
  );
};

export default ProfileCompletion;