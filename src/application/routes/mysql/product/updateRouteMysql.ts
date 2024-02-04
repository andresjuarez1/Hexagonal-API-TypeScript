import express, { Request, Response } from 'express';
import { updateProductMysql } from '../../../controllers/mysql/productControllerMysql/updateControllerMysql';

const productUpdateRouterMysql = express.Router();

productUpdateRouterMysql.put('/productos/:id', async (req: Request, res: Response) => {
    const productId: number = parseInt(req.params.id, 10);
    const updatedProductData = req.body;

    try {
        await updateProductMysql(req, res);  
        res.json({ message: 'Producto actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productUpdateRouterMysql };