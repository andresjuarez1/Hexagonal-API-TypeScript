import { Request, Response } from 'express';
import productRepository from '../../../infrastructure/repositories/productRepository';

async function getAllProducts(req: Request, res: Response) {
    try {
        const products = await productRepository.getAllProducts();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { getAllProducts };
