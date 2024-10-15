import { Request, Response } from "express";
import User_Utils from "../services/userServices";
import { get } from "lodash";
import user from "router/user";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User_Utils.getUsers();

        res.status(200).send(users);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateUserFavMovies = async (req: Request, res: Response) => {
    try {
        const userId = get(req, "userData.user_id")!;
        const updatingUser = await User_Utils.getUserById(userId as string)!;

        if (!updatingUser) {
            res.status(400).send();
            return;
        }

        const newFavMovies = req.body.favorites;

        // Check if 'newFavMovies' exists
        if (!newFavMovies) {
            res.status(400).send("Invalid input");
            return;
        }

        // Validate that 'newFavMovies' is an array of strings
        if (!Array.isArray(newFavMovies)) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        if (newFavMovies.length === 0) {
            console.log("empty array detected");
            res.status(400).send("Invalid Input");
            return;
        }

        if (!newFavMovies.every((item) => typeof item === "string")) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        // Update and save the user's favorite movies
        updatingUser.favorites = newFavMovies;
        await updatingUser.save();

        res.status(200).send(updatingUser);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateUserWatchList = async (req: Request, res: Response) => {
    try {
        const userId = get(req, "userData.user_id")!;
        const updatingUser = await User_Utils.getUserById(userId as string)!;

        if (!updatingUser) {
            res.status(400).send();
            return;
        }

        const newWatchList = req.body.watchlist;

        if (!newWatchList) {
            res.status(400).send("Invalid input");
            return;
        }

        // Validate that 'newWatchLis' is an array of strings
        if (!Array.isArray(newWatchList)) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        if (newWatchList.length === 0) {
            console.log("empty array detected");
            res.status(400).send("Invalid Input");
            return;
        }

        if (!newWatchList.every((item) => typeof item === "string")) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        updatingUser.watchlist = newWatchList;
        await updatingUser.save();

        res.status(200).send(updatingUser);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateUserGenres = async (req: Request, res: Response) => {
    try {
        const userId = get(req, "userData.user_id")!;
        const updatingUser = await User_Utils.getUserById(userId as string)!;

        if (!updatingUser) {
            res.status(400).send();
            return;
        }

        const newPreferred_Genres = req.body.preferred_genres;
        
        if (!newPreferred_Genres) {
            res.status(400).send("Invalid input");
            return;
        }

        // Validate that 'newWatchLis' is an array of strings
        if (!Array.isArray(newPreferred_Genres)) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        if (newPreferred_Genres.length === 0) {
            console.log("empty array detected");
            res.status(400).send("Invalid Input");
            return;
        }

        if (!newPreferred_Genres.every((item) => typeof item === "string")) {
            res.status(400).send("Input must be an array of string");
            return;
        }

        updatingUser.preferred_genres = newPreferred_Genres;
        await updatingUser.save();

        res.status(200).send(updatingUser);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
