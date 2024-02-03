import { deleteUser } from '../../../controllers/mongodb/userController/deleteControllerUser';
import express, { Request, Response } from 'express'; 

const userDeteleRouter = express.Router();

userDeteleRouter.delete('/users/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        await deleteUser(req, res, userId);  // Pasa tanto req como res a deleteUser
        res.json({ message: 'Usuario eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { userDeteleRouter };
