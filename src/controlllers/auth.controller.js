import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import asyncHandler from "../lib/asyncHandler.js";
import { UserAUthConstants } from "../common/auth/authConstants.js";
import { signUpSchema } from "../lib/validation/userValidation.js";

//Route 1: Sign Up route
export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = validatedData.data;

  //Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ message: UserAUthConstants.USER_ALREADY_EXISTS });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  const token = generateToken({ id: user._id });
  res.status(201).json({
    message: UserAUthConstants.USER_CREATED,
    token,
    userId: user._id,
    fullName: `${user.firstName} ${user.lastName}`,
  });
});
export const login = (req, res) => {
  res.send("Sign up route");
};
export const logout = (req, res) => {
  res.send("Sign up route");
};
