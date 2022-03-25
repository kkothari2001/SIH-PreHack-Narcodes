import express from "express";
import { signup, signin } from "../../handlers/user/auth.js";
import { editProfile, getProfile } from "../../handlers/user/profile.js";
import { authenticateToken } from "../../utils.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

router.route("/:id/profile")
    .get(authenticateToken, getProfile)
    .put(authenticateToken, editProfile)

export default router;