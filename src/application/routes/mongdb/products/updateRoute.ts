import express, { Request, Response } from 'express';
import { updateProduct } from '../../../controllers/mongodb/productController/updateController';

const productUpdateRouter = express.Router();

productUpdateRouter.put('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    try {
        await updateProduct(req, res, productId, updatedProductData);  // Pasa tanto req como res a updateProduct
        res.json({ message: 'Producto actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { productUpdateRouter };
