import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { UserAUthConstants } from "../common/constants.js";
import { generateToken } from "../lib/utils.js";
//Route 1: Sign Up route
export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //check user passowrd length
  try {
    if (password.length < UserAUthConstants.PASSWORD_MIN_LENGTH) {
      return res
        .status(400)
        .json({ message: UserAUthConstants.PASSWORD_LENGTH_ERROR });
    }

    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: UserAUthConstants.USER_ALREADY_EXISTS });
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
    const token = generateToken({ id: user._id });
    res
      .status(201)
      .json(
        { message: UserAUthConstants.USER_CREATED },
        token,
        user._id,
        user.firstName
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: UserAUthConstants.SOMETHING_WENT_WRONG });
  }
};
export const login = (req, res) => {
  res.send("Sign up route");
};
export const logout = (req, res) => {
  res.send("Sign up route");
};
