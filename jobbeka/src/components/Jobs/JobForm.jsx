import React, { useState } from "react";
import axios from "axios";
import Button from "../Shared/Button";

const JobForm = () => {

  const [job, setJob] = useState({
    title: "",
    location: "",
    salary: "",
    experience: "",
    jobType: "",
    description: "",
    expiryDate: "",
    companyId: ""
  });

  const handleChange = (e) => {

    setJob({
      ...job,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/jobs",
        job
      );

      alert("Job Created");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <input
        type="text"
        name="salary"
        placeholder="Salary"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <input
        type="text"
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-800 text-white"
      />

      <Button
        text="Create Job"
        type="submit"
      />

    </form>
  );
};

export default JobForm;