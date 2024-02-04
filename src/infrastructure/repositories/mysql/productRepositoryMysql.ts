import { connectMysql } from '../../../infrastructure/adapters/mysqlAdapter';

import { ProductEntityMySQL, IProductMySQL } from '../../../domain/entities/productEntityMysql';

class ProductRepositoryMySQL {
  async createProduct(productData: any): Promise<IProductMySQL> {
    try {
      const connection = await connectMysql();
      const query = 'INSERT INTO products SET ?';
      
      return new Promise<IProductMySQL>((resolve, reject) => {
        connection.query(query, productData, (error, results) => {
          connection.end(); 
          if (error) {
            reject(error);
          } else {
            const newProductId = results.insertId;
            resolve({ ...productData, id: newProductId });
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId: number): Promise<void> {
    try {
      const connection = await connectMysql();
      const query = 'DELETE FROM products WHERE id = ?';
      
      return new Promise<void>((resolve, reject) => {
        connection.query(query, [productId], (error) => {
          connection.end();  
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts(): Promise<IProductMySQL[]> {
    try {
      const connection = await connectMysql();
      const query = 'SELECT * FROM products';
      
      return new Promise<IProductMySQL[]>((resolve, reject) => {
        connection.query(query, (error, results) => {
          connection.end();  
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId: number, updatedProductData: any): Promise<IProductMySQL | null> {
    try {
      const connection = await connectMysql();
      const query = 'UPDATE products SET ? WHERE id = ?';
      
      return new Promise<IProductMySQL | null>((resolve, reject) => {
        connection.query(query, [updatedProductData, productId], (error) => {
          connection.end();  
          if (error) {
            reject(error);
          } else {
            resolve({ ...updatedProductData, id: productId });
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductRepositoryMySQL();
