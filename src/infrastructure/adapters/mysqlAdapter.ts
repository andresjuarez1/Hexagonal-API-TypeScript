import mysql from 'mysql';
import 'dotenv/config';

const mysqlConfig = {
  connectionLimit: 10,  
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'apihexagonal', 
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
};

const mysqlPool = mysql.createPool(mysqlConfig);

async function connectMysql() {
  return new Promise<mysql.PoolConnection>((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) {
        console.error('Error al conectar a MySQL:', error);
        reject(error);
      } else {
        console.log('Conectado a MySQL');
        resolve(connection);
      }
    });
  });
}

async function closeMysqlConnection() {
  return new Promise<void>((resolve, reject) => {
    mysqlPool.end((error) => {
      if (error) {
        console.error('Error al cerrar la conexión MySQL:', error);
        reject(error);
      } else {
        console.log('Conexión MySQL cerrada');
        resolve();
      }
    });
  });
}

export { connectMysql, closeMysqlConnection };
