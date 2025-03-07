import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app"
dotenv.config();


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI 

if (!MONGO_URI) {
    throw new Error("Invalid MONGO_URI");
    process.exit(1)
}



const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongoose connected");

        app.listen(PORT, () => {
            console.log(`Server is up and running on ${PORT}`);
        });
    } catch (err) {
        console.error("MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};

startServer();
