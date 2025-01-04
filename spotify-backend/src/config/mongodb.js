import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI; // Ensure this is loaded from the environment
        if (!dbURI) {
            throw new Error("MONGO_URI not defined in .env");
        }
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection has failed:", error.message);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;
