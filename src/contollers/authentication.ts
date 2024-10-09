import { Request, Response, NextFunction } from "express";
import User_Utils from "services/userServices";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password, preferred_genres } = req.body;

        if (!username || !password || !preferred_genres) {
            return res.status(400);
        }

        const existingUser = await User_Utils.getUserByUsername(username);
        if (existingUser) {
            return res.status(400);
        }
    } catch (error) {
        console.log(error);
        res.status(400);
    }
};
