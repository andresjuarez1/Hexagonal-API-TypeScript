import mysql from 'mysql';

const mysqlConfig = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'hexagonalAPI',
    port: parseInt(process.env.MYSQL_PORT || '3306', 10),
};

const mysqlConnection = mysql.createConnection(mysqlConfig);

async function connectMysql() {
    return new Promise<void>((resolve, reject) => {
        mysqlConnection.connect((error) => {
            if (error) {
                console.error('Error al conectar a MySQL:', error);
                reject(error);
            } else {
                console.log('Conectado a MySQL');
                resolve();
            }
        });
    });
}

export { connectMysql };
