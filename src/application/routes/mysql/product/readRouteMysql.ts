import express, { Request, Response } from 'express';
import { getAllProductsMysql } from '../../../controllers/mysql/productControllerMysql/readControllerMysql';

const productReadRouterMysql = express.Router();

productReadRouterMysql.get('/productos', async (req: Request, res: Response) => {
    try {
        const products = await getAllProductsMysql(req, res);
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productReadRouterMysql };
