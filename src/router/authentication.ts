import { login, logout, register } from "../contollers/authentication";
import { Router } from "express";
import { isAuthenticated } from "../middleware";

export default (router: Router) => {
    router.post("/auth/register", register);
    router.post("/auth/login", login);
    router.get("/auth/logout", isAuthenticated, logout);
};
