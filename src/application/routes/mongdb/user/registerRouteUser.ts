import { createUser } from '../../../controllers/mongodb/userController/registerControllerUser';
import express, { Request, Response } from 'express'; 

const userCreateRouter = express.Router();

userCreateRouter.post('/register', async (req: Request, res: Response) => {
    try {
        const result = await createUser(req, res);  
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { userCreateRouter };
