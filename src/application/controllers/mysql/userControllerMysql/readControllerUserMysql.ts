import { Request, Response, NextFunction } from 'express';
import userRepositoryMySQL from '../../../../infrastructure/repositories/mysql/userRepositoryMysql';

async function getAllUsersMysql(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await userRepositoryMySQL.getAllUsers();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { getAllUsersMysql };
