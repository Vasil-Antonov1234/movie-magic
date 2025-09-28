import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        requred: [true, "Cast name is required"]
    },
    age: {
        type: numbe,
        requred: [true, "Age is required"],
        max: 120,
        min: 0
    },
    born: {
        type: String,
        requred: [true, "Place of birth is required"]
    },
    imageUrl: {
        type: String,
        requred: true
    }
})

const Cast = model("Cast", castSchema);


export default Cast;