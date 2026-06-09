import React from "react";

const Button = ({
  text,
  onClick,
  className = "",
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-lime-400 hover:bg-lime-500 
      text-black font-semibold px-5 py-2 rounded-lg 
      transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;