import { Request, Response, NextFunction } from 'express';
import userRepositoryMySQL from '../../../../infrastructure/repositories/mysql/userRepositoryMysql';

async function createUserMysql(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await userRepositoryMySQL.createUser(req.body);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { createUserMysql };
