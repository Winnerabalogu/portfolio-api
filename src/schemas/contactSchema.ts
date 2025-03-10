import { Schema } from "mongoose";


const ContactSchema = new Schema(
    {
        name: {type: String, required: true },
        phone: {type: Number, required: true },
        subject: {type: String, required: true },
        email: {type: String, required: true },
        message: {type: String, required: true },
    },
    {timestamps: true}
);
export default ContactSchema;