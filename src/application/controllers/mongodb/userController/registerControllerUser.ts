import { Request, Response } from 'express';
import userRepository from '../../../../infrastructure/repositories/mongodb/userRepository';

async function createUser(req: Request, res: Response) {
    try {
        const token = await userRepository.createUser(req.body);
        res.cookie("token", token)
        return token;
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

export { createUser };
