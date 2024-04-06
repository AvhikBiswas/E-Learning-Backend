import { Request, Response } from "express";
import { userUpdatePayload } from "../../types/User";
import updateUserDetails from "../../service/updateUserDetails";


const updateUser = async (req: Request, res: Response) => {
  try {
    const { id, newEmail, newName, newPassword, newProfilePicture } = req.body;

    if (!id) {
      throw new Error("id is required fields");
    }
    const UpdatedDetails: userUpdatePayload = {
      id,
      newEmail,
      newName,
      newPassword,
      newProfilePicture,
    };

    const profileData = await updateUserDetails(UpdatedDetails);

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
      err: error,
    });
  }
};

export default updateUser;
