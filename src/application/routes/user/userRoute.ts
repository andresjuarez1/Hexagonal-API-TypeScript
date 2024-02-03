import express, { Request, Response } from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../../controllers/userController/userController';

const userRouter = express.Router();

userRouter.post('/users', async (req: Request, res: Response) => {
    try {
        const result = await createUser(req, res);  
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers(req, res); 
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.put('/users/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
        await updateUser(req, res, userId, updatedUserData);  
        res.json({ message: 'Usuario actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.delete('/users/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        await deleteUser(req, res, userId);  // Pasa tanto req como res a deleteUser
        res.json({ message: 'Usuario eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { userRouter };
