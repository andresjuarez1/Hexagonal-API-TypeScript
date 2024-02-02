import { start as startExpress } from './repositories/expressAdapter';
import { connect as connectMongo } from './repositories/mongoAdapter';
import 'dotenv/config'; 

require('dotenv').config();

connectMongo()
    .then(() => {
        startExpress();
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });