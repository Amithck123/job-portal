import API from "../api/axios.js";

export const addCompany = (companyData) => API.post("/company", companyData);

export const getAllCompanies = () => API.get("/company");
