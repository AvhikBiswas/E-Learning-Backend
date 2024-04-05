import { Request, Response } from "express";
import getProfileData from "../service/getProfileData";

const getProfile = async (req: any, res: Response) => {
  try {
    const  email = req.user.email;
    email.toLowerCase();
    if (!email) {
      throw new Error("Email is required fields");
    }

    const profileData = await getProfileData(email as string);

    if (!profileData) {
      throw new Error("User not found");
    }

    return res.status(200).json({
      success: true,
      message: "User profile data retrieved successfully",
      data: profileData,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong",
      data: {},
    });
  }
};

export default getProfile;
