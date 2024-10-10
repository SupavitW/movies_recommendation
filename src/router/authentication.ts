import { login, logout, register } from "../contollers/authentication";
import { Router } from "express";

export default (router: Router) => {
    router.post("/auth/register", register);
    router.post("/auth/login", login);
    router.get("/auth/logout", logout);
};
