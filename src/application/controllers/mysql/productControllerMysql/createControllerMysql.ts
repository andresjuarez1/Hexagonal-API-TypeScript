import { Request, Response } from 'express';
import productRepositoryMySQL from '../../../../infrastructure/repositories/mysql/productRepositoryMysql';  

async function createProductMysql(req: Request, res: Response) {
    try {
        const result = await productRepositoryMySQL.createProduct(req.body);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { createProductMysql };