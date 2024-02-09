import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    verified_at: number;
    created_at: number;
    deleted_at: number;
}

const productSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified_at: { type: Number, required: false },
    created_at: { type: Number, required: false },
    deleted_at: { type: Number, required: false }
});

const UserEntity = mongoose.model<IUser>('Users', productSchema);

export { UserEntity, IUser };
