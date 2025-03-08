
import express, {Application, Request, Response}  from "express";
import contactRoutes from "./routes/contact";
import userRoutes from './routes/user';
import cors from "cors";

const app: Application = express();


app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.send("Server is up and Running");
});

app.use(contactRoutes);
app.use(userRoutes);

export default app;