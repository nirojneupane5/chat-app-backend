import express from "express";
import dotenv from "dotenv";
import conntectDB from "./db.js";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();

conntectDB();
const port = process.env.PORT || 8080;

app.use(express.json());
app.get("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
