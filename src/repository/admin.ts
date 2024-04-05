import { prismaClient } from "../db";
import { hashPassword } from "../helper/encryption";
import { adminType } from "../types/admin";

class Admin {
  async createUser(newAdminData: adminType) {
    try {
      const hashPass = await hashPassword(newAdminData.adminPassWord);
      const newAdmin = await prismaClient.admin.create({
        data: {
          adminName: newAdminData.adminName,
          adminEmail: newAdminData.adminEmail,
          adminPassWord: hashPass,
        },
      });

      return newAdmin;
    } catch (error) {
      console.error("Error creating admin", error);
      return error;
    }
  }

  async findAdmin(email: string) {
    try {
      const adminData = await prismaClient.admin.findFirst({
        where: {
          adminEmail: email,
        },
      });
      return adminData;
    } catch (error) {
      return error;
    }
  }

  async deleteAdmin(adminId: string) {
    try {
      const deleteData = await prismaClient.admin.delete({
        where: { id: adminId },
      });

      return deleteData;
    } catch (error) {
      console.error("Error creating admin", error);
      return error;
    }
  }
}

export default Admin;
