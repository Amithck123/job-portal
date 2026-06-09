import React from "react";

const latest = [
  {
    company: "Google",
    role: "Frontend Developer",
  },

  {
    company: "Amazon",
    role: "Backend Developer",
  },

  {
    company: "Netflix",
    role: "React Developer",
  },
];

const LatestApplications = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">

      <h1 className="text-2xl font-bold text-white mb-6">
        Latest Applications
      </h1>

      <div className="flex flex-col gap-4">

        {latest.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-2xl flex items-center justify-between"
          >

            <div>
              <h2 className="text-white font-semibold">
                {item.company}
              </h2>

              <p className="text-gray-400 text-sm">
                {item.role}
              </p>
            </div>

            <button className="bg-cyan-500 px-4 py-2 rounded-xl text-white hover:bg-cyan-400 transition-all">
              View
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default LatestApplications;