import { Router } from "express";
import {
  userRegister,
  userLogIn,
  logoutUser,
  getCurrentUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { getUserContents } from "../controllers/content.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/sign-in").post(userRegister);
router.route("/login").post(userLogIn);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/get-contents").get(verifyJWT, getUserContents);

export default router;
