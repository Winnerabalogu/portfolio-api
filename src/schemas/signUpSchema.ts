import { Schema } from "mongoose";


const signUpSchema = new Schema(
    {
        name: {type: String, required: true },
        password:{type: String, required: true}
    },
    {timestamps: true}
);
export default signUpSchema;