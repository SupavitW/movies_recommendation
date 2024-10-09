import { ObjectId, Document } from "mongoose";

export default interface User extends Document {
    _id: ObjectId;
    username: string;
    authentication: {
        password: string;
        sessionToken: string;
    };
    favorites: string[]; // Array of movie IDs the user has favorited
    watchlist: string[]; // Array of movie IDs the user wants to watch
    preferred_genres: string[];
}
