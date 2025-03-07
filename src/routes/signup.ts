import { model } from "mongoose";
import signUpSchema from "../schemas/signUpSchema";

const signup = model("SignUp", signUpSchema);

export default signup


