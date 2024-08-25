import { Router } from "express";

import {
  createContent,
  saveProgress,
  deleteContent,
  updateContent,
} from "../controllers/content.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyJWT, createContent);

router.route("/save-progress/:contentID").patch(verifyJWT, saveProgress);
router.route("/update/:contentID").patch(verifyJWT, updateContent);
router.route("/delete/:contentID").delete(verifyJWT, deleteContent);

export default router;
