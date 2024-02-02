import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createProduct, getAllProducts } from '../application/useCases/productUseCase';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
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

function start() {
    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };
