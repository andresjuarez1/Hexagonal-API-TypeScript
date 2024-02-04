import { Request, Response } from 'express';
import productRepositoryMySQL from '../../../../infrastructure/repositories/mysql/productRepositoryMysql';

async function deleteProductMysql(req: Request, res: Response): Promise<void> { 
    const productId: number = parseInt(req.params.id, 10);

    try {
        await productRepositoryMySQL.deleteProduct(productId);
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { deleteProductMysql };
