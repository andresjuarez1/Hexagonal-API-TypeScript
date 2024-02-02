import { UserEntity } from '../../../domain/entities/userEntity';
import { connect } from '../../../infrastructure/adapters/mongoAdapter';

async function createUser(userData: any) {
    await connect();

    const userEntity = new UserEntity(userData);
    const savedUser = await userEntity.save();

    return savedUser;
}

async function getAllUsers(): Promise<any[]> {
    await connect();

    try {
        const users = await UserEntity.find();
        if (!users || users.length === 0) {
            console.log('No se encontraron usuarios.');
            return [];
        }
        console.log('Usuarios obtenidos:', users);
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}

async function updateUser(userId: string, updatedUserData: any) {
    await connect();

    try {
        const updatedUser = await UserEntity.findByIdAndUpdate(
            userId,
            updatedUserData,
            { new: true }
        );

        if (!updatedUser) {
            throw new Error('No se encontró el usuario con el ID proporcionado.');
        }

        console.log('Usuario actualizado:', updatedUser);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
}

async function deleteUser(userId: string) {
    await connect();

    try {
        const deletedUser = await UserEntity.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw new Error('No se encontró el usuario con el ID proporcionado.');
        }

        console.log('Usuario eliminado:', deletedUser);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
}

export { createUser, getAllUsers, updateUser, deleteUser };
