import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
//Route 1: Sign Up route
export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //check user passowrd length
  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters long" });
    }

    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const login = (req, res) => {
  res.send("Sign up route");
};
export const logout = (req, res) => {
  res.send("Sign up route");
};
