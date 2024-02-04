import express from 'express';
import bodyParser from 'body-parser';

import { productCreateRouter } from '../../application/routes/mongdb/products/createRoute';
import { productReadRouter } from '../../application/routes/mongdb/products/readRoute';
import { productUpdateRouter } from '../../application/routes/mongdb/products/updateRoute';
import { productDeleteRouter } from '../../application/routes/mongdb/products/deteleRoute';


import { userCreateRouter } from '../../application/routes/mongdb/user/createRouteUser';
import { userDeteleRouter } from '../../application/routes/mongdb/user/deleteRouteUser';
import { userReadRouter } from '../../application/routes/mongdb/user/readRouteUser';
import { userUpdateRouter } from '../../application/routes/mongdb/user/updateRouteUser';


import { userCreateRouterMysql } from '../../application/routes/mysql/user/createRouteUserMysql';
import { userDeleteRouterMysql } from '../../application/routes/mysql/user/deleteRouteUserMysql';
import { userReadRouterMysql } from '../../application/routes/mysql/user/readRouteUserMysql';
import { userUpdateRouterMysql } from '../../application/routes/mysql/user/updateRouteUserMysql';

import { productCreateRouterMysql } from '../../application/routes/mysql/product/createRouteMysql';
import { productDeleteRouterMysql } from '../../application/routes/mysql/product/deleteRouteMysql';
import { productReadRouterMysql } from '../../application/routes/mysql/product/readRouteMysql';
import { productUpdateRouterMysql } from '../../application/routes/mysql/product/updateRouteMysql';


import { connect } from '../../infrastructure/adapters/mongoAdapter';
import { connectMysql, closeMysqlConnection } from '../../infrastructure/adapters/mysqlAdapter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

async function start() {
    try {
        await connect();
        console.log('Usando MongoDB como base de datos.');
        app.use(productCreateRouter);
        app.use(productReadRouter);
        app.use(productUpdateRouter);
        app.use(productDeleteRouter);

        app.use(userCreateRouter);
        app.use(userDeteleRouter);
        app.use(userReadRouter);
        app.use(userUpdateRouter);
    } catch (mongoError) {
        console.error(`Error al conectar a MongoDB`);

        try {
            await connectMysql();
            console.log('Usando MySQL como base de datos.');

            app.use(productCreateRouterMysql);
            app.use(productReadRouterMysql);
            app.use(productUpdateRouterMysql);
            app.use(productDeleteRouterMysql);

            app.use(userCreateRouterMysql);
            app.use(userDeleteRouterMysql);
            app.use(userReadRouterMysql);
            app.use(userUpdateRouterMysql);
        } catch (mysqlError) {
            console.log(`Error al conectar a MySQL`);
        }
    }

    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}

export { start };