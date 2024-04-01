import { prismaClient } from "../db";
import { UserPayload } from "../types/User";

class User {
  async createUser(userData: UserPayload) {
    try {
      const newUser = await prismaClient.user.create({
        data: {
          name: userData.name,
          password: userData.password,
          profilePicture: userData?.profilePicture,
          email: userData.email,
        },
      });

      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      return error;
    }
  }

  async findUserByEmail(userEmail: string) {
    try {
      const data = await prismaClient.user.findUnique({
        where: { email: userEmail },
      });
      return data;
    } catch (error) {
      console.error("Error finding user:", error);
      return error;
    }
  }

  async deleteUser(userEmail: string) {
    try {
      const data = await prismaClient.user.delete({
        where: { email: userEmail },
      });
      return data;
    } catch (error) {
      console.error("Error deleting user:", error);
      return error;
    }
  }
}

export default User;
