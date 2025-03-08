import express, { Request, Response } from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/SignUp', async (req: Request, res: Response) => {
    console.log("creating user");
    try {
        const { name, email, password, phone } = req.body;
        const user = new User ({name, email, password, phone });
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        console.error("Error creating user ", error);
        res.status(400).json({ success: false, error });
    }
});

export default router;
