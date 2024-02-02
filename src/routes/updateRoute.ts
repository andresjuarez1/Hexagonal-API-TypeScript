import express, { Request, Response } from 'express';
import { updateProduct } from '../controllers/updateController';

const updateRouter = express.Router();

updateRouter.put('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    try {
        await updateProduct(productId, updatedProductData);
        res.json({ message: 'Producto actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { updateRouter }; 