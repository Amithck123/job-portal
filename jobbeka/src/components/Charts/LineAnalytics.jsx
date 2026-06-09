import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    applications: 5,
  },

  {
    month: "Feb",
    applications: 8,
  },

  {
    month: "Mar",
    applications: 12,
  },

  {
    month: "Apr",
    applications: 15,
  },

  {
    month: "May",
    applications: 20,
  },
];

const LineAnalytics = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-3xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        Application Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

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

export default LineAnalytics;