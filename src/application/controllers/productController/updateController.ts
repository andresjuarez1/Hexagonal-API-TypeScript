import { Request, Response } from 'express';
import productRepository from '../../../infrastructure/repositories/productRepository';

async function updateProduct(req: Request, res: Response, productId: string, updatedProductData: any) {
    try {
        const updatedProduct = await productRepository.updateProduct(productId, updatedProductData);
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
