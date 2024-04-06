import { Request, Response } from "express";
import { adminType } from "../../types/admin";
import createAdminAcc from "../../service/createAdminAcc";


async function createAdmin(req: Request, res: Response) {
  const newAdminData: adminType = req.body;
  if (
    !newAdminData.adminName ||
    !newAdminData.adminPassWord ||
    !newAdminData.adminEmail
  ) {
    throw new Error("Admin name, password, and email cannot be empty");
  }
  try {
    const newAdmin = await createAdminAcc(newAdminData);
    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: newAdmin,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create admin",
      data: null,
      error: error,
    });
  }
}
export default createAdmin;
