import { Request, Response, NextFunction } from 'express';
import userRepositoryMySQL from '../../../../infrastructure/repositories/mysql/userRepositoryMysql';

async function updateUserMysql(req: Request, res: Response, next: NextFunction) {
    const userId: number = parseInt(req.params.id, 10);
    const updatedUserData = req.body;

    try {
        const updatedUser = await userRepositoryMySQL.updateUser(userId, updatedUserData);
        res.json({ message: 'Usuario actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { updateUserMysql };
