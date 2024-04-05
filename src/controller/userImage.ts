import { Request, Response } from "express";
import { uploadImageToCloudinary } from "../service/userImageUpload";
import cloudinary from "../config/cloudinaryConfig";

export const imageUploadController = async (req:any, res:any) => {
    try {
        console.log('req', req.user);
      const result = await cloudinary.uploader.upload(req.file, { folder: 'your_folder_name' });
      console.log('result', result)
      const imageUrl = result.secure_url;
      res.json({ imageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  };