import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/moviesdb";

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
