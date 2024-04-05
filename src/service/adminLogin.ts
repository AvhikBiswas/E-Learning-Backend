import { generateAdminAccessToken } from "../auth/jwt";
import { comparePasswords } from "../helper/encryption";
import Admin from "../repository/admin";
import { LoginPayload } from "../types/User";

const adminLogin = async (AdminCredential: LoginPayload) => {
  const adminRepository = new Admin();

  try {
    const adminData: any = await adminRepository.findAdmin(
      AdminCredential.email
    );

    if (!adminData) return -1;
    if (adminData) {
      const isPassCorrect = await comparePasswords(
        AdminCredential.password,
        adminData.adminPassWord
      );
      console.log("isPassCorrect", isPassCorrect);
      if (isPassCorrect) {
        const accessToken = generateAdminAccessToken({
          id: adminData.id,
          userType: "admin",
        });
        return accessToken;
      }
    }
    return false;
  } catch (error) {
    return error;
  }
};

export default adminLogin;
