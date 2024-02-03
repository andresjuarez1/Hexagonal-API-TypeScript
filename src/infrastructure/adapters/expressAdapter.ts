import express from 'express';
import bodyParser from 'body-parser';

import { productCreateRouter } from '../../application/routes/products/createRoute';
import { productReadRouter } from '../../application/routes/products/readRoute';
import { productUpdateRouter } from '../../application/routes/products/updateRoute';
import { productDeleteRouter } from '../../application/routes/products/deteleRoute';   


import { userCreateRouter } from '../../application/routes/user/createRouteUser';
import { userDeteleRouter } from '../../application/routes/user/deleteRouteUser';
import { userReadRouter } from '../../application/routes/user/readRouteUser';
import { userUpdateRouter } from '../../application/routes/user/updateRouteUser';

import { connectMongo } from '../../infrastructure/adapters/mongoAdapter';
import { connectMysql } from '../../infrastructure/adapters/mysqlAdapter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


async function start() {
    try {
        await connectMongo();
        console.log('Usando MongoDB como base de datos.');
    } catch {
        await connectMysql();
        console.log('Usando MySQL como base de datos.');
    }
    app.use(productCreateRouter);
    app.use(productReadRouter);
    app.use(productUpdateRouter);
    app.use(productDeleteRouter); 

    app.use(userCreateRouter);
    app.use(userDeteleRouter);
    app.use(userReadRouter);
    app.use(userUpdateRouter);

    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };