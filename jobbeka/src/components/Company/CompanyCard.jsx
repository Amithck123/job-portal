import React from "react";

const CompanyCard = ({ company }) => {

  return (

    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

      <img
        src={company.logo}
        alt=""
        className="w-16 h-16 rounded-xl"
      />

      <h2 className="text-xl font-bold text-white mt-4">
        {company.companyName}
      </h2>

      <p className="text-gray-400 mt-2">
        {company.description}
      </p>

      <a
        href={company.website}
        target="_blank"
        className="text-lime-400 mt-3 inline-block"
      >
        Visit Website
      </a>

    </div>

  );
};

export default CompanyCard;