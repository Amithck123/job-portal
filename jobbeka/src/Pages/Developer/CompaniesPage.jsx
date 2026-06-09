import React, { useEffect, useState } from "react";
import { addCompany, getAllCompanies } from "../../services/companyService";

const CompaniesPage = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    location: "",
    website: "",
    description: "",
  });
  const [companies, setCompanies] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await getAllCompanies();
        setCompanies(res.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCompany(companyData);
      setMessage("Company added successfully.");
      setCompanyData({ companyName: "", location: "", website: "", description: "" });
      const res = await getAllCompanies();
      setCompanies(res.data || []);
    } catch (error) {
      console.error(error);
      setMessage("Could not add company.");
    }
  };

  return (
    <div className="text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Companies</h1>
        <p className="text-slate-400 mt-2">Manage company profiles and show them on your job portal.</p>
      </div>

      {message && (
        <div className="mb-6 rounded-3xl bg-lime-500/10 border border-lime-500/20 p-4 text-lime-200">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl">
        <input
          value={companyData.companyName}
          onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
          placeholder="Company Name"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />
        <input
          value={companyData.location}
          onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
          placeholder="Location"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />
        <input
          value={companyData.website}
          onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
          placeholder="Website"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
        />
        <textarea
          value={companyData.description}
          onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
          placeholder="Description"
          className="min-h-140px rounded-3xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
          required
        />
        <button className="w-fit rounded-3xl bg-lime-500 px-6 py-3 font-semibold text-black transition hover:bg-lime-400">
          Add Company
        </button>
      </form>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company) => (
          <div key={company._id} className="rounded-3xl bg-slate-900 p-6 border border-slate-700 shadow-sm">
            <h2 className="text-xl font-semibold text-white">{company.companyName}</h2>
            <p className="mt-3 text-slate-400 line-clamp-3">{company.description}</p>
            <p className="mt-4 text-slate-300">Location: {company.location}</p>
            {company.website && (
              <a className="mt-3 inline-block text-lime-400 underline" href={company.website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
