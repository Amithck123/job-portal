import React from "react";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    status: "Interview",
    date: "12 May 2026",
  },

  {
    id: 2,
    company: "Amazon",
    role: "MERN Developer",
    status: "Pending",
    date: "10 May 2026",
  },

  {
    id: 3,
    company: "Netflix",
    role: "React Developer",
    status: "Rejected",
    date: "8 May 2026",
  },
];

const ApplicationTable = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 overflow-x-auto">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">
          My Applications
        </h1>
      </div>

      <table className="w-full text-left text-white">

        <thead>
          <tr className="border-b border-slate-700">

            <th className="p-4">Company</th>
            <th className="p-4">Role</th>
            <th className="p-4">Status</th>
            <th className="p-4">Applied</th>

          </tr>
        </thead>

        <tbody>
          {applications.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-800 hover:bg-slate-800 transition-all"
            >

              <td className="p-4">{item.company}</td>

              <td className="p-4">{item.role}</td>

              <td className="p-4">

                <span
                  className={`px-4 py-1 rounded-full text-sm
                  
                  ${
                    item.status === "Interview"
                      ? "bg-green-500/20 text-green-400"
                      : item.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }
                  
                  `}
                >
                  {item.status}
                </span>

              </td>

              <td className="p-4">{item.date}</td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ApplicationTable;