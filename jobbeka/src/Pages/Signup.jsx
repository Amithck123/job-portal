import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  // ADD THIS
  console.log("Sending Data:", formData);

  try {

    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      formData
    );

    console.log("Response:", response.data);

    alert(response.data.message);

  } catch (error) {

    console.log("Signup Error:", error);
    console.log("Backend Response:", error.response?.data);

    alert(JSON.stringify(error.response?.data));

  }

};

  return (

    <div className="min-h-screen flex justify-center items-center bg-black">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-2xl w-400px space-y-5"
      >

        <h1 className="text-3xl font-bold text-white">
          Signup
        </h1>

        <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Name"
  className="w-full p-3 rounded bg-zinc-800 text-white"
/>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full p-3 rounded bg-zinc-800 text-white"
/>

<input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full p-3 rounded bg-zinc-800 text-white"
/>

        <select className="w-30 h-10 bg-black text-white"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">
            User
          </option>

          <option value="developer">
            Developer
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-lime-400 text-black py-3 rounded-lg font-bold"
        >
          Signup
        </button>

      </form>

    </div>

  );

};

export default Signup;