import express, { Request, Response } from 'express'; 
import { logoutUser } from '../../../controllers/mongodb/userController/logoutControllerUser';

const userLogoutRoute = express.Router();

userLogoutRoute.post('/logout', async (req: Request, res: Response) => {
    try {
        const result = await logoutUser(req, res);  
        if (result) res.sendStatus(200);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { userLogoutRoute };
