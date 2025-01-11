import express from "express";

const router = express.Router();

//Route 1: Sign up route
router.post("/signup", (req, res) => {
  res.send("Sign up route");
});

//Route 2: Login route
router.post("/login", (req, res) => {
  res.send("Login route");
});

//Route 3: Logout route
router.post("/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
