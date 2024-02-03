import { UserEntity, IUser } from '../../../domain/entities/userEntity';

class UserRepository {
    async createUser(userData: any): Promise<IUser> {
        const userEntity = new UserEntity(userData);
        const savedUser = await userEntity.save();
        return savedUser;
    }

    async getAllUsers(): Promise<IUser[]> {
        const users = await UserEntity.find();
        return users;
    }

    async updateUser(userId: string, updatedUserData: any): Promise<IUser | null> {
        const updatedUser = await UserEntity.findByIdAndUpdate(
            userId,
            updatedUserData,
            { new: true }
        );
        return updatedUser;
    }

    async deleteUser(userId: string): Promise<void> {
        await UserEntity.findByIdAndDelete(userId);
    }
}

export default new UserRepository();
