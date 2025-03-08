import express, { Request, Response } from 'express';
import Contact from '../models/contact';

const router = express.Router();

router.post('/contact', async (req: Request, res: Response) => {
    console.log("creating new contact");
    try {
        const { name, email, subject, phone, message } = req.body;
        const contact = new Contact({ name, email, subject, phone, message });
        await contact.save();
        res.status(201).json({ success: true, contact });
    } catch (error) {
        console.error("Error creating Contact ", error);
        res.status(400).json({ success: false, error });
    }
});

export default router;
