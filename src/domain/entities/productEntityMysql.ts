import { connectMysql } from '../../infrastructure/adapters/mysqlAdapter';

interface IProductMySQL {
  id: number;
  nombre_producto: string;
  precio: number;
}

class ProductEntityMySQL {
  static async findById(productId: number): Promise<IProductMySQL | null> {
    try {
      const connection = await connectMysql();
      const query = 'SELECT * FROM products WHERE id = ?';
      
      return new Promise<IProductMySQL | null>((resolve, reject) => {
        connection.query(query, [productId], (error, results) => {
          connection.end();  
          if (error) {
            reject(error);
          } else {
            const product = results[0];
            resolve(product || null);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}
export { ProductEntityMySQL, IProductMySQL };
