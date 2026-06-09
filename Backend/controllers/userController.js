import User from "../models/User.js";
import cloudinary
from "../config/cloudinary.js";
export const uploadResume =
async (req, res) => {

   const result =
      await cloudinary.uploader.upload(
         req.file.path
      );

   const user = await User.findById(
      req.user.id
   );

   user.resume = result.secure_url;

   await user.save();

   res.json({
      resume: result.secure_url
   });
};

export const saveJob = async (req, res) => {

   const user = await User.findById(req.user.id);

   if (!user.savedJobs.includes(req.params.jobId)) {

      user.savedJobs.push(req.params.jobId);

      await user.save();
   }

   res.json({
      message: "Job Saved"
   });
};

