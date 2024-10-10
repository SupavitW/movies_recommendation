import bcrypt from "bcrypt";

export const passwordHash = async (password: string, saltRounds: number) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw new Error("Hashing Password Error");
    }
};

export const comparePassword = async (password: string, hash: string) => {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (error) {
        throw new Error("Compare Password Error");
    }
};
