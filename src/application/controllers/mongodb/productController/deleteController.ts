import { Request, Response } from 'express';
import productRepository from '../../../../infrastructure/repositories/mongodb/productRepository';

async function deleteProduct(req: Request, res: Response, productId: string) {
    try {
        const deletedProduct = await productRepository.deleteProduct(productId); 
        console.log('Producto eliminado:', deletedProduct);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
}

export { deleteProduct };
