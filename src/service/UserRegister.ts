import User from "../repository/user";
import { UserPayload } from "../types/User";

const UserRegister = async (userData: UserPayload) => {
  const userRepository = new User();

  try {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
      return;
    }
    const newUserData = await userRepository.createUser(userData);
    return newUserData;
  } catch (error) {
    return error;
  }
};

export default UserRegister;
