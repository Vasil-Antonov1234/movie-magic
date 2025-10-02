import bcrypt from "bcrypt";
import User from "../models/User.js"
import { generateAuthToken } from "../utils/tokenUtils.js";

export default {
    async register(userData) {
        const user = await User.create(userData);

        const token = generateAuthToken(user);

        return token;
    },
    
    async login(userData) {
        const email = userData.email;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid user or password!");
        };

        const isValid = await bcrypt.compare(userData.password, user.password);

        if (!isValid) {
            throw new Error("Invalid user or password!")
        }

        const token = generateAuthToken(user);

        return token;
    }
};