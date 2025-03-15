import User from "../models/user.model.js";
//Route 1: Sign Up route
export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  //Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(201).json(user);
};
export const login = (req, res) => {
  res.send("Sign up route");
};
export const logout = (req, res) => {
  res.send("Sign up route");
};
