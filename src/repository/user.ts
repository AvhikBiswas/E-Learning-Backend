import { prismaClient } from "../db";
import { hashPassword } from "../helper/encryption";
import { UserPayload, userUpdatePayload } from "../types/User";

class User {
  async createUser(userData: UserPayload) {
    try {
      const hashPass = await hashPassword(userData.password);
      const newUser = await prismaClient.user.create({
        data: {
          name: userData.name,
          password: hashPass,
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

  async findUserById(UserID: string) {
    try {
      const data = await prismaClient.user.findUnique({
        where: { id: UserID },
      });
      return data;
    } catch (error) {
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

  async updateUser(uerUpdate: userUpdatePayload) {
    if (uerUpdate.newPassword) {
      const hashPass = await hashPassword(uerUpdate.newPassword);
      uerUpdate.newPassword = hashPass;
    }

    try {
      const updatedUser = await prismaClient.user.update({
        where: { id: uerUpdate.id },
        data: {
          name: uerUpdate?.newName,
          email: uerUpdate?.newEmail,
          profilePicture: uerUpdate?.newPassword,
        },
      });
      return updatedUser;
    } catch (error) {
      return error;
    }
  }
}

export default User;
