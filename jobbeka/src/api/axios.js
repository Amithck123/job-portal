// File Path: C:/Users/RT/OneDrive/Desktop/Project/jobbeka/src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust to your backend port if different
});

// Automatically attach the JWT token to every request header
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;