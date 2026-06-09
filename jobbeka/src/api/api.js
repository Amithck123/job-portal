import axios from "./axios";

const API = axios.create({
  baseURL: "https://jobportal-backend.onrender.com/api",
});
export default API;