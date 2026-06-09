import axios from "axios";

const API = "http://localhost:5000/api/application";

export const applyJob = async (data) => {

  return await axios.post(API, data);

};

export const getAppliedJobs = async (id) => {

  return await axios.get(`${API}/user/${id}`);

};