import React from "react";
import { motion } from "framer-motion";

const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
  icon,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`bg-cyan-500 hover:bg-cyan-400 transition-all text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg ${className}`}
    >

      {icon && icon}

      {text}

    </motion.button>
  );
};

export default Button;