import { parseInt } from "lodash";
import TmdbService from "../services/movieServices";
import { Request, Response } from "express";

export const searchMovie = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;

        if (!query) {
            res.status(400).json("Search Query is required");
            return;
        }

        if (typeof query !== "string") {
            res.status(400).send("Invalid input");
            return;
        }

        const movies = await TmdbService.searchMovies(query);
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const getMovieInfo = async (req: Request, res: Response) => {
    try {
        const { movieId } = req.params;
        // Check if movieId is provided
        if (!movieId) {
            res.status(400).json("Movie ID is required");
            return;
        }

        // Parse the movieId into an integer
        const movieIdInt = parseInt(movieId, 10);
        console.log(`ParseInt: ${movieIdInt}`);

        // Check if movieId is a valid number
        if (isNaN(movieIdInt)) {
            res.status(400).json("Invalid Movie ID");
            return;
        }

        const movieInfo = await TmdbService.getMovieDetails(movieIdInt);
        res.status(200).json(movieInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const getPopularMovie = async (req: Request, res: Response) => {
    try {
        const popularMovies = await TmdbService.getPopularMovies();
        res.status(200).json(popularMovies);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
