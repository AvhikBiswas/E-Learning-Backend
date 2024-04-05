import {  generateUserAccessToken } from "../auth/jwt";
import { comparePasswords } from "../helper/encryption";
import User from "../repository/user";
import { JwtUserPayload } from "../types/auth";
import { LoginPayload, UserPayload, UserType } from "../types/User";

const signIn = async (loginData: LoginPayload) => {
  const userRepository = new User();

  try {
    const userData: any = await userRepository.findUserByEmail(loginData.email);
    if (!userData) return -1;
    if (userData) {
      const isPassCorrect = await comparePasswords(
        loginData.password,
        userData.password
      );
      if (isPassCorrect) {
        const accessToken = generateUserAccessToken({
          id: userData.id,
          email: userData.email,
          userType: "student",
        });
        return accessToken;
      }
    }
    return false;
  } catch (error) {
    return error;
  }
};

export default signIn;
