import {  generateUserAccessToken } from "../auth/jwt";
import { sendRegistrationConfirmationEmail } from "../helper/emailSender";
import User from "../repository/user";
import { UserPayload } from "../types/User";

const UserRegister = async (userData: UserPayload) => {
  const userRepository = new User();
  try {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
      return;
    }
    const newUserData:any = await userRepository.createUser(userData);
    if(newUserData){
    const newUserData:any = await userRepository.createUser(userData);
      const emailRes=await sendRegistrationConfirmationEmail(newUserData.email,newUserData.name);
      return generateUserAccessToken({id:newUserData.id,email:newUserData.email,userType:"student"});
    }
  } catch (error) {
    return error;
  }
};

export default UserRegister;
