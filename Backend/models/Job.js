import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number },
    location: { type: String },
    type: { type: String },
    experience: { type: String },
    skillsRequired: [{ type: String }],
    companyName: { type: String },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
