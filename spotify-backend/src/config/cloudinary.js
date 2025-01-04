import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        });
        console.log("Cloudinary configured successfully");
    } catch (error) {
        console.error("Failed to configure Cloudinary:", error.message);
    }
};

export default connectCloudinary;