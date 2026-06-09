import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-300px">

      <div className="relative">

        <div className="w-20 h-20 border-4 border-cyan-500/20 rounded-full"></div>

        <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>

      </div>

    </div>
  );
};

export default Loader;