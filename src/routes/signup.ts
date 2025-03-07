import { model } from "mongoose";
import signUpSchema from "../schemas/signUpSchema";

const signup = model("Contact", signUpSchema);

export default signup


