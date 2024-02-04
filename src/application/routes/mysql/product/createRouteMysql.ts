import express, { Request, Response } from 'express';
import { createProductMysql } from '../../../controllers/mysql/productControllerMysql/createControllerMysql';

const productCreateRouterMysql = express.Router();

productCreateRouterMysql.post('/productos', async (req: Request, res: Response) => {
    try {
        const result = await createProductMysql(req, res);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export { productCreateRouterMysql };
