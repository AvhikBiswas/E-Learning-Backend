import { Request, Response } from "express";
import getProfileData from "../service/getProfileData";
import { ResetEmailOTP } from "../service/resetPassword";

const resetuserController = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log("email", email);
    email.toLowerCase();
    if (!email) {
      throw new Error("Email is required fields");
    }

    const profileData = await getProfileData(email as string);

    if (!profileData) {
      throw new Error("User not found");
    }
    const restData = await ResetEmailOTP(email);
    if (restData) {
      return res.status(200).json({
        success: true,
        message: "User profile data retrieved successfully",
        data: restData,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "error got",
        data: restData,
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong",
      data: {},
    });
  }
};

export default resetuserController;
