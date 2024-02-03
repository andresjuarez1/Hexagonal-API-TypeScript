import { Request, Response } from 'express';
import userRepository from '../../../infrastructure/repositories/userRepository';

async function createUser(req: Request, res: Response) {
    try {
        // Implementa la lógica para crear un usuario aquí utilizando req.body
        const result = await userRepository.createUser(req.body);
        return result;
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

async function getAllUsers(req: Request, res: Response) {
    try {
        // Implementa la lógica para obtener todos los usuarios aquí
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}

async function updateUser(req: Request, res: Response, userId: string, updatedUserData: any) {
    try {
        const updatedUser = await userRepository.updateUser(userId, updatedUserData);
        return updatedUser;
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
}

async function deleteUser(req: Request, res: Response, userId: string) {
    try {
        const deletedUser = await userRepository.deleteUser(userId);
        return deletedUser;
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
}

export { createUser, getAllUsers, updateUser, deleteUser };
