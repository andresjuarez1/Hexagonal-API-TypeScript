import express, { Request, Response } from 'express';
import { updateUser } from '../../controllers/userController/updateControllerUser';

const userUpdateRouter = express.Router();

userUpdateRouter.put('/users/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
        await updateUser(req, res, userId, updatedUserData);
        res.json({ message: 'Usuario actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export { userUpdateRouter };
