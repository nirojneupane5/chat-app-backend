import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const conntectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};

export default conntectDB;
