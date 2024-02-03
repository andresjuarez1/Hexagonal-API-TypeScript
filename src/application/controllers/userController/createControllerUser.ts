import { Request, Response } from 'express';
import userRepository from '../../../infrastructure/repositories/userRepository';

async function createUser(req: Request, res: Response) {
    try {
        const result = await userRepository.createUser(req.body);
        return result;
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

export { createUser };
