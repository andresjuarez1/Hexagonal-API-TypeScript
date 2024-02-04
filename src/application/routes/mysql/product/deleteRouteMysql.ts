// Ruta para eliminar un producto en MySQL
import express, { Request, Response } from 'express';
import { deleteProductMysql } from '../../../controllers/mysql/productControllerMysql/deleteControllerMysql';

const productDeleteRouterMysql = express.Router();

productDeleteRouterMysql.delete('/productos/:id', async (req: Request, res: Response) => {
    const productId: number = parseInt(req.params.id, 10);

    try {
        await deleteProductMysql(req, res);  
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productDeleteRouterMysql };
