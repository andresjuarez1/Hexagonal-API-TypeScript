import { start as startExpress } from './infrastructure/adapters/expressAdapter';
import { connect as connectionMongo } from './infrastructure/adapters/mongoAdapter';
import { connectMysql, closeMysqlConnection } from './infrastructure/adapters/mysqlAdapter';
import 'dotenv/config'; 

const startServer = async () => {
    let connectedToMongo = false;

    try {
        await connectionMongo();
        console.log('Conectado a MongoDB');
        connectedToMongo = true;
    } catch (mongoError: any) {
        console.error(`Error al conectar a MongoDB: ${(mongoError as Error).message}`);
    }

    if (!connectedToMongo) {
        try {
            await connectMysql();
            console.log('Conectado a MySQL');
        } catch (mysqlError: any) {
            console.error(`Error al conectar a MySQL: ${(mysqlError as Error).message}`);
            console.error('No se pudo conectar a ninguna base de datos.');
            return;
        }
    }

    startExpress();
};

startServer();
