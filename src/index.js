import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.get("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
