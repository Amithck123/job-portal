import React from "react";
import { Bell, Search } from "lucide-react";

const DeveloperNavbar = () => {

  return (

    <div className="w-full h-20 bg-zinc-900 border-b border-zinc-800 px-8 flex items-center justify-between">

      {/* Search */}

      <div className="flex items-center bg-black px-4 py-2 rounded-xl w-400">

        <Search className="text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white ml-3 w-full"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <Bell className="text-white cursor-pointer" />

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="text-white font-semibold">
              Developer
            </h3>

            <p className="text-gray-400 text-sm">
              Admin Access
            </p>
          </div>

        </div>

      </div>

    </div>

  );
};

export default DeveloperNavbar;