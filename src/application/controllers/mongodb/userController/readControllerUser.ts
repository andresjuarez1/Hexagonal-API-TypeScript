import { Request, Response } from 'express';
import userRepository from '../../../../infrastructure/repositories/mongodb/userRepository'; 

async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}

export { getAllUsers };
