import express, { Request, Response } from 'express';
import { getAllProducts } from '../controllers/readController';

const readRouter = express.Router();

readRouter.get('/productos', async (req: Request, res: Response) => { 
    console.log('coyol');
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { readRouter };