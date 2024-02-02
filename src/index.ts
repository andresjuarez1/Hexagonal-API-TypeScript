import { start as startExpress } from './infrastructure/adapters/expressAdapter';
import { connect as connectMongo } from './infrastructure/adapters/mongoAdapter';
import 'dotenv/config'; 

require('dotenv').config();

connectMongo()
    .then(() => {
        startExpress();
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });