import express, { Request, Response } from 'express';
import { createProduct } from '../../../controllers/mongodb/productController/createController';

const productCreateRouter = express.Router();

productCreateRouter.post('/productos', async (req: Request, res: Response) => {
    try {
        const result = await createProduct(req, res); 
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productCreateRouter };
