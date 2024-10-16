import { Router } from "express";
import authentication from "./authentication";
import user from "./user";
import movie from "./movie";

const router = Router();

export default (): Router => {
    authentication(router);
    user(router);
    movie(router);
    return router;
};
