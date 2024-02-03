import express from 'express';
import bodyParser from 'body-parser';
import { productCreateRouter } from '../../application/routes/products/createRoute';
import { productReadRouter } from '../../application/routes/products/readRoute';
import { productUpdateRouter } from '../../application/routes/products/updateRoute';
import { productDeleteRouter } from '../../application/routes/products/deteleRoute';  
import { userRouter } from '../../application/routes/user/userRoute';

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