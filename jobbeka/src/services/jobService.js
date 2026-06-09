import API from "../api/axios";

export const getJobs = () => API.get("/jobs");
export const createJob = (data) => API.post("/jobs", data);
export const applyJob = (data) => API.post("/applications", data);
export const getDeveloperApplications = (developerId) =>
  API.get(`/applications/developer/${developerId}`);
export const getUserApplications = (userId) => API.get(`/applications/user/${userId}`);
