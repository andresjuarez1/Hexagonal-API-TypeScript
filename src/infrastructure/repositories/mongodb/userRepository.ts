import { UserEntity, IUser } from '../../../domain/entities/userEntity';
import { createAccessToken } from '../../libs/jwt';
import bcrypt from 'bcryptjs';

interface User {
    email: string,
    password: string
}

class UserRepository {
    async createUser(userData: User): Promise<string | undefined> {

        const encryptedPassword = await bcrypt.hash(userData.password, 10);

        const userEntity = new UserEntity({
            email: userData.email,
            password: encryptedPassword
        });

        const savedUser = await userEntity.save();
        const token = createAccessToken({ savedUser })

        return token;
    }

    async loginUser({ email, password }: User): Promise<string | undefined> {
        const userFound = await UserEntity.findOne({ email });

        if (!userFound) return

        const isMatch = await bcrypt.compare(password, userFound?.password);

        if (!isMatch) return

        const token = createAccessToken({ userFound })

        return token;
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
