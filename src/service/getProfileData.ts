import User from "../repository/user";
import { UserPayload } from "../types/User";

const getProfileData = async (email: string) => {
  const userRepository = new User();

  try {
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      return existingUser;
    }
    return;
  } catch (error) {
    return error;
  }
};

export default getProfileData;
