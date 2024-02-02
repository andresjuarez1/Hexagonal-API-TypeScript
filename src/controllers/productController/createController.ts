import { ProductEntity } from '../../domain/entities/productEntity';
import { connect } from '../../repositories/mongoAdapter';

async function createProduct(productData: any) {
    await connect();

    const productEntity = new ProductEntity(productData);
    const savedProduct = await productEntity.save();

    return savedProduct;
}

export { createProduct };
