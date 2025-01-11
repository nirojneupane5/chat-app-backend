import express from "express";
import { login, logout, signUp } from "../controlllers/auth.controller.js";

const router = express.Router();

//Route 1: Sign up route
router.post("/signup", signUp);

//Route 2: Login route
router.post("/login", login);

//Route 3: Logout route
router.post("/logout", logout);

export default router;
