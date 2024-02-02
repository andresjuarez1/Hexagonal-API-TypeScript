import express, { Request, Response } from 'express';
import { createProduct } from '../controllers/createController';

const createRouter = express.Router();

createRouter.post('/productos', async (req: Request, res: Response) => {
    try {
        const result = await createProduct(req.body);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { createRouter };
