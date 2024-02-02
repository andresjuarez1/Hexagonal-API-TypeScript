import { ProductEntity } from '../../domain/entities/productEntity';
import { connect } from '../../adapters/mongoAdapter';

async function createProduct(productData: any) {
    await connect();

    const productEntity = new ProductEntity(productData);
    const savedProduct = await productEntity.save();

    return savedProduct;
}

async function getAllProducts() {
    await connect();

    try {
        const products = await ProductEntity.find();
        if (!products || products.length === 0) {
            console.log('No se encontraron productos.');
            return [];
        }
        console.log('Productos obtenidos:', products);
        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

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


export { createProduct, getAllProducts, updateProduct, deleteProduct };
