import { deleteProduct } from '../controllers/deleteController'; 
import express, { Request, Response } from 'express';

const deleteRouter = express.Router();


deleteRouter.delete('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        await deleteProduct(productId);
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { deleteRouter }; 