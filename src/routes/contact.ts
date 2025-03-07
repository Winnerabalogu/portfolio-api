
import ContactSchema from "../schemas/contactSchema";
import { model } from "mongoose";


const Contact = model("Contact", ContactSchema)

export default Contact