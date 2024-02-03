import { ProductEntity, IProduct } from '../../../domain/entities/productEntity';

class ProductRepository {
    async createProduct(productData: any): Promise<IProduct> {
        const productEntity = new ProductEntity(productData);
        const savedProduct = await productEntity.save();
        return savedProduct;
    }

    async deleteProduct(productId: string): Promise<void> {
        await ProductEntity.findByIdAndDelete(productId);
    }

    async getAllProducts(): Promise<IProduct[]> {
        const products = await ProductEntity.find();
        return products;
    }

    async updateProduct(productId: string, updatedProductData: any): Promise<IProduct | null> {
        const updatedProduct = await ProductEntity.findByIdAndUpdate(
            productId,
            updatedProductData,
            { new: true }
        );
        return updatedProduct;
    }
}

export default new ProductRepository();
