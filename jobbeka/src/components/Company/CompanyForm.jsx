import React, { useState } from "react";
import axios from "axios";
import Button from "../Shared/Button";

const CompanyForm = () => {
  // Configured to match your backend model schema parameters perfectly
 const [company, setCompany] = useState({
  companyName: "",
  location: "",
  website: "",
  logo: "",
  description: ""
});

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/company", company);
      alert("Company Added Successfully!");
      
      // Cleanly resetting initialized state keys
      setCompany({ name: "", logo: "", website: "", description: "", location: "" });
    } catch (error) {
      console.error("Error saving company to backend:", error);
      alert("Failed to add company. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="companyName"
        value={company.companyName}
        placeholder="Company Name"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
        required
      />

      {/* Added Location input field because your database model requires it */}
      <input
        type="text"
        name="location"
        value={company.location}
        placeholder="Location (e.g. New York, Remote)"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
        required
      />

      <input
        type="text"
        name="logo"
        value={company.logo}
        placeholder="Logo URL"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <input
        type="text"
        name="website"
        value={company.website}
        placeholder="Website URL"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <textarea
        name="description"
        value={company.description}
        placeholder="Description"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
        required
      />

      <Button
        text="Add Company"
        type="submit"
      />
    </form>
  );
};

export default CompanyForm;