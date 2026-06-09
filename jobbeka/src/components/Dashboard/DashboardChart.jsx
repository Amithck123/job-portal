import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", applications: 4 },
  { month: "Feb", applications: 7 },
  { month: "Mar", applications: 10 },
  { month: "Apr", applications: 14 },
];

const DashboardChart = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 mt-8">
      <h2 className="text-white text-2xl font-bold mb-6">
        Application Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="applications"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;