// 1. Fixed: Changed require() to import syntax
import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
 companyName: {  // 👈 Changed from 'name' to 'companyName'
    type: String,
    required: true,
    trim: true
  },
  logo: { type: String, default: "" },
  
  location: {
    type: String,
    required: true
  },
  website: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    required: true
  },
  openPositions: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 2. Fixed: Changed 'companySchema' to 'CompanySchema' to match above, 
// and changed to default export to match your route import
const Company = mongoose.model("Company", CompanySchema);
export default Company;