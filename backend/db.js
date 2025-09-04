import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectt = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected", connectt.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);     
    }
};

export default connectDB;