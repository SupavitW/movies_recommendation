import mongoose from "mongoose";
import User from "../interface/user.interface";

const UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    authentication: {
        password: { type: String, require: true, select: false },
        sessionToken: { type: String, select: false },
    },
    favorites: { type: Array },
    watchlist: { type: Array },
    preferred_genres: { type: Array, require: true },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
