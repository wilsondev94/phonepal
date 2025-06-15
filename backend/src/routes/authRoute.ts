import { Router } from "express";
import { authUser, loginUser } from "../controllers/authController";

const router = Router();

router.post("/register", authUser);

router.post("/login", loginUser);

export default router;
