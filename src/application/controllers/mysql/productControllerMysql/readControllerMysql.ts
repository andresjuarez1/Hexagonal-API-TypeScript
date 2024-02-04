import { Request, Response } from 'express';
import productRepositoryMySQL from '../../../../infrastructure/repositories/mysql/productRepositoryMysql';

async function getAllProductsMysql(req: Request, res: Response) {
    try {
        const products = await productRepositoryMySQL.getAllProducts();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { getAllProductsMysql };
