import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { get, merge } from "lodash";
import User_Utils from "../services/userServices";

export const isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const sessionToken = req.cookies["Movies_Token"];

        if (!sessionToken) {
            res.status(403).json("No credential");
            return;
        }

        // Check jwt embedded data
        const decoded_data = jwt.verify(sessionToken, process.env.SECRET as string);
        if (!decoded_data) {
            res.status(403).json("Wrong credential");
        }

        // Find user in db via sessionToken
        const user = await User_Utils.getUserBySessionToken(sessionToken);

        if (!user) {
            res.status(400).json("No user found");
        }

        merge(req, { userData: decoded_data });
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const isOwner = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const userId = get(req, "userData.user_id");

        if (!userId) {
            res.status(400).json("Invalid Session");
            return;
        }

        if (userId != id) {
            res.status(403).json("Action not allowed");
            return;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
