import Admin from "../repository/admin";
import { adminType } from "../types/admin";

const createAdminAcc = async (adminData: adminType) => {
  const adminRepository = new Admin();
  try {
    const data: any = await adminRepository.createUser(adminData);
    return data;
  } catch (error) {
    return error;
  }
};

export default createAdminAcc;
