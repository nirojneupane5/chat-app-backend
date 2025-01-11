import express from "express";
import authRoute from "./routes/auth.route.js";

const app = express();

const port = 4000;

app.get("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
