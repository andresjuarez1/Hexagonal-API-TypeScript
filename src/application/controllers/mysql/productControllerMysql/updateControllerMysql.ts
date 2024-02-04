import { Request, Response } from 'express';
import productRepositoryMySQL from '../../../../infrastructure/repositories/mysql/productRepositoryMysql';

async function updateProductMysql(req: Request, res: Response) {
    const productId: number = parseInt(req.params.id, 10);
    const updatedProductData = req.body;

    try {
        const updatedProduct = await productRepositoryMySQL.updateProduct(productId, updatedProductData);
        if (!updatedProduct) {
            throw new Error('No se encontró el producto con el ID proporcionado.');
        }

        res.json({ message: 'Producto actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { updateProductMysql };
