import express, { Request, Response } from 'express';
import { deleteProduct } from '../../../controllers/mongodb/productController/deleteController';

const productDeleteRouter = express.Router();

productDeleteRouter.delete('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        await deleteProduct(req, res, productId);  
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productDeleteRouter };
