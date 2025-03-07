
import express, {Application, Request, Response}  from "express";
import Contact from "./routes/contact";
import signUp from './routes/signup';
import cors from "cors";

const app: Application = express();


app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.send("Server is up and Running");
});

app.post("/signup", async(req: Request, res: Response) => {
    console.log("creating user");
    try{
        const{ name, password, email, phone } = req.body
        const signup = new signUp({name, password, email, phone });
        await signup.save();
        res.status(201).json({ success: true, signup});
        console.log("user created successfully")
    }catch(error){
        console.log("Error creating user ", error );
        res.status(400).json({ success : false, error});
    };
});

app.post("/contact", async(req: Request, res: Response) => {
    console.log("creating contact");
    try{
        const { name, phone, subject, email, message } = req.body;
        const contact = new Contact({ name, phone, subject, email, message});
        await contact.save();
        res.status(201).json({ sucess: true, contact });
        console.log("Successfully created");
    }catch(error){
        console.error("Error creating contact" , error);
        res.status(400).json({ success: false, error});
        
    };
});

export default app;