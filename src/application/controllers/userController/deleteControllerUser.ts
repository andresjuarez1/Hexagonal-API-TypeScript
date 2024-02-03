import { Request, Response } from 'express';
import userRepository from '../../../infrastructure/repositories/userRepository'; 

async function deleteUser(req: Request, res: Response, userId: string) {
    try {
        const deletedUser = await userRepository.deleteUser(userId);
        return deletedUser;
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
}

export { deleteUser };
