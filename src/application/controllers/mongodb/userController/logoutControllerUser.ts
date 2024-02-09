import { Request, Response } from 'express';
import userRepository from '../../../../infrastructure/repositories/mongodb/userRepository';

async function logoutUser(req: Request, res: Response) {
    try {
        return res.cookie('token', "", { expires: new Date(0) })
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

export { logoutUser };
