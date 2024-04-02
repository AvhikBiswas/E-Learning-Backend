import { comparePasswords } from "../helper/encryption";
import User from "../repository/user";
import { LoginPayload, UserPayload } from "../types/User";

const signIn = async (loginData: LoginPayload) => {
  const userRepository = new User();

  try {
    const userData: any = await userRepository.findUserByEmail(loginData.email);
    if (!userData) {
      return false;
    }
    const isPassCorrect = await comparePasswords(
      loginData.password,
      userData.password
    );
    return isPassCorrect;
  } catch (error) {
    return error;
  }
};

export default signIn;
