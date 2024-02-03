import express, { Request, Response } from 'express';
import { getAllProducts } from '../../../controllers/mongodb/productController/readController';

const productReadRouter = express.Router();

productReadRouter.get('/productos', async (req: Request, res: Response, ) => {
    try {
        const products = await getAllProducts(req, res);
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productReadRouter };
