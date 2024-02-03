import { start as startExpress } from './infrastructure/adapters/expressAdapter';
import { connectMongo as connectionMongo } from './infrastructure/adapters/mongoAdapter';
import { connectMysql as connectionMysql } from './infrastructure/adapters/mysqlAdapter';
import 'dotenv/config';

require('dotenv').config();

connectionMongo()
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

// connectionMysql()  
//     .then(() => {
//         console.log('Conectado a MySQL');
//     })
//     .catch((error) => {
//         console.error('Error al conectar a MySQL:', error);
//     });

startExpress();
