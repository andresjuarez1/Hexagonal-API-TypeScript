import mongoose, { Document } from 'mongoose';

interface IProduct extends Document {
    id: number;
    nombre_producto: string;
    precio: number;
}

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nombre_producto: { type: String, required: true },
    precio: { type: Number, required: true },
});

const ProductEntity = mongoose.model<IProduct>('Product', productSchema);

export { ProductEntity, IProduct };
