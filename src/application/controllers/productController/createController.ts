import { Request, Response } from 'express';
import productRepository from '../../../infrastructure/repositories/productRepository';

async function createProduct(req: Request, res: Response) {
    try {
        const result = await productRepository.createProduct(req.body);
        return result;
    } catch (error: any) {
        throw error;
    }
}  

export { createProduct };
