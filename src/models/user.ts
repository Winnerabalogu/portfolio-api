import { model } from "mongoose";
import userSchema from "../schemas/userSchema";

const user = model("User", userSchema);

export default user;


