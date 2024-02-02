import express from 'express';
import bodyParser from 'body-parser';
import { productCreateRouter } from '../routes/products/createRoute';
import { productReadRouter } from '../routes/products/readRoutes';
import { productUpdateRouter } from '../routes/products/updateRoute';
import { productDeleteRouter } from '../routes/products/deteleRoute';
import { userRouter } from '../routes/user/userRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(productCreateRouter);
app.use(productReadRouter);
app.use(productUpdateRouter);
app.use(productDeleteRouter);
app.use(userRouter);

function start() {
    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };