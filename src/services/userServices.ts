import UserModel from "../db/user";

export default class User_Utils {
    static getUsers = async () => {
        return await UserModel.find();
    };

    static getUserById = async (id: string) => {
        return await UserModel.findById(id);
    };

    static getUserBySessionToken = async (sessionToken: string) => {
        return await UserModel.findOne({
            "authentication.sessionToken": sessionToken,
        });
    };

    static getUserByUsername = async (username: string) => {
        return await UserModel.findOne({ username });
    };

    static createUser = async (values: Record<string, any>) => {
        const newUser = await new UserModel(values).save();
        return newUser.toObject();
    };

    static deleteUserById = async (id: string) => {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return deletedUser;
    };

    static updateUserById = async (id: string, values: Record<string, any>) => {
        const updatedUser = await UserModel.findByIdAndUpdate(id, values);
        return updatedUser;
    };
}
