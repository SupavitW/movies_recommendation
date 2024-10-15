import { Router } from "express";
import {
    getAllUsers,
    updateUserFavMovies,
    updateUserGenres,
    updateUserWatchList,
} from "../contollers/user";
import { isAuthenticated, isOwner } from "../middleware";

export default (router: Router) => {
    router.get("/user/getAllUsers", isAuthenticated, getAllUsers);
    router.patch(
        "/user/updateFavMovies/:id",
        isAuthenticated,
        isOwner,
        updateUserFavMovies,
    );
    router.patch(
        "/user/updateWatchList/:id",
        isAuthenticated,
        isOwner,
        updateUserWatchList,
    );
    router.patch(
        "/user/updateGenres/:id",
        isAuthenticated,
        isOwner,
        updateUserGenres,
    );
};
