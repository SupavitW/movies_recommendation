import { Request, Response } from "express";
import User_Utils from "../services/userServices";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { comparePassword, passwordHash } from "../helper";
dotenv.config();

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password, preferred_genres } = req.body;
        if (!username || !password || !preferred_genres) {
            res.status(400).send("Invalid User Input");
        }

        const existingUser = await User_Utils.getUserByUsername(username);
        if (existingUser) {
            res.status(400).send("User already exist");
        }

        const hashedPassword = await passwordHash(password, 11);
        const newUser = await User_Utils.createUser({
            username,
            authentication: {
                password: hashedPassword,
            },
            preferred_genres,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).send("Invalid Input");
            return;
        }

        const user = await User_Utils.getUserByUsername(username).select(
            "+authentication.password",
        );

        if (!user) {
            res.status(400).send("No user found");
            return;
        }

        if (!(await comparePassword(password, user.authentication.password))) {
            res.status(400).send("Wrong password");
        }

        const user_id = user._id;
        const user_genres = user.preferred_genres;
        const secret = process.env.SECRET || "SECRET";
        const token = jwt.sign({ user_id, user_genres }, secret, {
            expiresIn: "30m",
        });
        user.authentication.sessionToken = token;
        await user.save();

        res.status(200).cookie("Movies_Token", token).json("Login Successful");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.Movies_Token;
        if (!token) res.status(400).json("No token");

        res.status(200).clearCookie("Movies_Token").json("Logout Successful");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
