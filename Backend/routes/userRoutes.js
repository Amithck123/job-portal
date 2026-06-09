import express from "express";
import protect from "../middleware/authMiddleware.js";
// ADD uploadResume inside this destructuring import object:
import { saveJob, uploadResume } from "../controllers/userController.js"; 
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
   "/upload-resume",
   protect,
   upload.single("resume"),
   uploadResume // <-- Now JavaScript knows exactly what this is!
);

router.post(
   "/save/:jobId",
   protect,
   saveJob
);

export default router;