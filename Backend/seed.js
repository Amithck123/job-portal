// const mongoose = require("mongoose");

// const User = require("./models/User");
// const Company = require("./models/Company");
// const Job = require("./models/Job");
// const Application = require("./models/Application");

// mongoose.connect("YOUR_MONGO_URI");

// const seedData = async () => {

//   const user = await User.create({
//     name: "Amith",
//     email: "amith@gmail.com",
//     password: "123456",
//     role: "user",
//   });

//   const company = await Company.create({
//     companyName: "TechSoft",
//     owner: user._id,
//   });

//   const job = await Job.create({
//     title: "MERN Developer",
//     description: "Need MERN Developer",
//     company: company._id,
//     createdBy: user._id,
//   });

//   await Application.create({
//     applicant: user._id,
//     job: job._id,
//     company: company._id,
//   });

//   console.log("Data Inserted");

//   process.exit();
// };

// seedData();