import {
    getMovieInfo,
    getPopularMovie,
    searchMovie,
} from "../contollers/movie";
import { Router } from "express";
import { isAuthenticated } from "../middleware";

export default (router: Router) => {
    router.get("/movies/searchMovies", isAuthenticated, searchMovie);
    router.get("/movies/getInfo/:movieId", isAuthenticated, getMovieInfo);
    router.get("/movies/popularMovies", isAuthenticated, getPopularMovie);
};
