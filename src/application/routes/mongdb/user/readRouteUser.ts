import express, { Request, Response } from 'express';
import { getAllUsers } from '../../../controllers/mongodb/userController/readControllerUser';

const userReadRouter = express.Router();


userReadRouter.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers(req, res); 
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export { userReadRouter };
