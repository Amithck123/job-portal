import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Applications",
    value: 24,
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "Interviews",
    value: 12,
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Offers",
    value: 3,
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Rejected",
    value: 5,
    color: "from-red-500 to-orange-500",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to- ${item.color} rounded-3xl p-6 shadow-xl`}
        >
          <h2 className="text-white text-lg">
            {item.title}
             </h2>

          <p className="text-4xl font-bold text-white mt-4">
            {item.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;