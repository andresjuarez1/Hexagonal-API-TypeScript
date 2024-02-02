// updateController.ts
import { ProductEntity } from '../domain/entities/productEntity';
import { connect } from '../adapters/mongoAdapter';

async function updateProduct(productId: string, updatedProductData: any) {
    await connect();

    try {
        const updatedProduct = await ProductEntity.findByIdAndUpdate(
            productId,
            updatedProductData,
            { new: true }
        );

        if (!updatedProduct) {
            throw new Error('No se encontró el producto con el ID proporcionado.');
        }

        console.log('Producto actualizado:', updatedProduct);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
}

export { updateProduct };
