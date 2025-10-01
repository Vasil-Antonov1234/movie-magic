import { Schema, model } from "mongoose";

import bcrpt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre("save", async function() {
    // const salt = await bcrpt.genSalt(12);
    this.password = await bcrpt.hash(this.password, 12);

});

const User =  model("User", userSchema);


export default User;