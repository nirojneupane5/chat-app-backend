import z from "zod";
import { UserAUthConstants as userConst } from "../../common/auth/authConstants.js";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(userConst.MIN_LENGTH, userConst.FIRST_NAME_REQUIRED)
    .max(userConst.MAX_LENGTH),
  lastName: z
    .string()
    .min(userConst.MIN_LENGTH, userConst.LAST_NAME_REQUIRED)
    .max(userConst.MAX_LENGTH),
  email: z
    .string()
    .min(userConst.MIN_LENGTH, userConst.EMAIL_REQUIRED)
    .email(userConst.VALID_EMAIL_ERROR),
  password: z
    .string()
    .min(userConst.PASSWORD_MIN_LENGTH, userConst.PASSWORD_LENGTH_ERROR),
});
