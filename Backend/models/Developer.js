import mongoose from "mongoose";

const developerSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: "developer"
  }

});

const Developer = mongoose.model(
  "Developer",
  developerSchema
);

export default Developer;