// import API from "../api";
import API from "../api/axios.js";

export const signupUser = async (data) => {
  return await API.post("/auth/signup", data);
};

export const loginUser = async (data) => {
  return await API.post("/auth/login", data);
};