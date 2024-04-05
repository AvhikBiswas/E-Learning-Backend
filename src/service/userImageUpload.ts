import cloudinary from "../config/cloudinaryConfig";


// Function to upload image to Cloudinary
const uploadImageToCloudinary = async (filePath: string): Promise<string> => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(filePath);
        console.log('result', result);

        // Return image URL
        return result.secure_url;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw new Error("Failed to upload image to Cloudinary");
    }
};

export { uploadImageToCloudinary };
