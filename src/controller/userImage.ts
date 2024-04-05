import { Request, Response } from "express";
import { uploadImageToCloudinary } from "../service/userImageUpload";
import cloudinary from "../config/cloudinaryConfig";
import updateUserDetails from "../service/updateUserDetails";

export const imageUploadController = async function (req: any, res: Response) {
  try {
    const userId = req.user.userId;
    await cloudinary.uploader.upload(
      req.file.path,
      { public_id: userId, overwrite: true },
      async function (err: any, result: any) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error While Uploading",
          });
        }
        const UserData={id:userId,newProfilePicture:result.url as string}
        await updateUserDetails(UserData);

        res.status(201).json({
          success: true,
          message: "Uploaded!",
          url: result.url, 
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Error uploading file" });
  }
};
