import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createProduct, getAllProducts, deleteProduct, updateProduct } from '../application/useCases/productUseCase';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/productos', async (req: Request, res: Response) => {
    try {
        const result = await createProduct(req.body);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/productos', async (req: Request, res: Response) => {
    console.log('coyol');
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


app.delete('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        await deleteProduct(productId);
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/productos/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    try {
        await updateProduct(productId, updatedProductData);
        res.json({ message: 'Producto actualizado correctamente.' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

function start() {
    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };
