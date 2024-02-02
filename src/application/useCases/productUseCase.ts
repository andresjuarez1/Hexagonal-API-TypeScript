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

export { createProduct, getAllProducts };
