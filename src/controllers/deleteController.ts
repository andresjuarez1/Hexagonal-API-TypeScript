// deleteController.ts
import { ProductEntity } from '../domain/entities/productEntity';
import { connect } from '../adapters/mongoAdapter';

async function deleteProduct(productId: string) {
    await connect();

    try {
        const deletedProduct = await ProductEntity.findByIdAndDelete(productId);

        if (!deletedProduct) {
            throw new Error('No se encontró el producto con el ID proporcionado.');
        }

        console.log('Producto eliminado:', deletedProduct);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
}

export { deleteProduct };
