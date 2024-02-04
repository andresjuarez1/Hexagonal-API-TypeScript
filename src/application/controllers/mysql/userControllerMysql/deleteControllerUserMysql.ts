import { Request, Response, NextFunction } from 'express';
import userRepositoryMySQL from '../../../../infrastructure/repositories/mysql/userRepositoryMysql';

async function deleteUserMysql(req: Request, res: Response, next: NextFunction) {
    const userId: number = parseInt(req.params.id, 10);

    try {
        await userRepositoryMySQL.deleteUser(userId);
        res.json({ message: 'Usuario eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { deleteUserMysql };
