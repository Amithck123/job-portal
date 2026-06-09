import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-8">
        Welcome {user?.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-lg">
            Total Jobs Posted
          </h2>

          <p className="text-4xl mt-4">
            12
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-lg">
            Applications Received
          </h2>

          <p className="text-4xl mt-4">
            45
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-lg">
            Active Jobs
          </h2>

          <p className="text-4xl mt-4">
            8
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;