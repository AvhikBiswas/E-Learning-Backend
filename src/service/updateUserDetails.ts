import User from "../repository/user";
import { userUpdatePayload } from "../types/User";

const updateUserDetails = async (UpdatePayload: userUpdatePayload) => {
  const userRepository = new User();

  try {
    const existingUser = await userRepository.findUserById(UpdatePayload.id);
    if (!existingUser) {
      return existingUser;
    }
    const updateUser = await userRepository.updateUser(UpdatePayload);
    return updateUser;
  } catch (error) {
    return error;
  }
};

export default updateUserDetails;
