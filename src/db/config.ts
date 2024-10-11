import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo:${process.env.DB_PORT}`;

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
