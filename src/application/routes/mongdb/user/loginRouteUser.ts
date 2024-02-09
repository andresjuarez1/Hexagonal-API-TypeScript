import express, { Request, Response } from 'express'; 
import { loginUser } from '../../../controllers/mongodb/userController/loginControllerUser';

const userLoginRouter = express.Router();

userLoginRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const result = await loginUser(req, res);  
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { userLoginRouter };
