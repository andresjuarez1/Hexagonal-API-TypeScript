import { Request, Response } from 'express';
import userRepository from '../../../../infrastructure/repositories/mongodb/userRepository'; 

async function updateUser(req: Request, res: Response, userId: string, updatedUserData: any) {
    try {
        const updatedUser = await userRepository.updateUser(userId, updatedUserData);
        return updatedUser;
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
}

export { updateUser };
