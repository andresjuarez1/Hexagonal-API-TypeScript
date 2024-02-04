import { connectMysql } from '../../../infrastructure/adapters/mysqlAdapter';
import { UserEntityMySQL, IUserMySQL } from '../../../domain/entities/userEntityMysql'; 

class UserRepositoryMySQL {
  async createUser(userData: any): Promise<IUserMySQL> {
    try {
      const connection = await connectMysql();
      const query = 'INSERT INTO users SET ?';
      
      return new Promise<IUserMySQL>((resolve, reject) => {
        connection.query(query, userData, (error, results) => {
          connection.end();  
          if (error) {
            reject(error);
          } else {
            const newUserId = results.insertId;
            resolve({ ...userData, id: newUserId });
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers(): Promise<IUserMySQL[]> {
    try {
      const connection = await connectMysql();
      const query = 'SELECT * FROM users';
      
      return new Promise<IUserMySQL[]>((resolve, reject) => {
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

  async updateUser(userId: number, updatedUserData: any): Promise<IUserMySQL | null> {
    try {
      const connection = await connectMysql();
      const query = 'UPDATE users SET ? WHERE id = ?';
      
      return new Promise<IUserMySQL | null>((resolve, reject) => {
        connection.query(query, [updatedUserData, userId], (error) => {
          connection.end(); 
          if (error) {
            reject(error);
          } else {
            resolve({ ...updatedUserData, id: userId });
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: number): Promise<void> {
    try {
      const connection = await connectMysql();
      const query = 'DELETE FROM users WHERE id = ?';
      
      return new Promise<void>((resolve, reject) => {
        connection.query(query, [userId], (error) => {
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
}

export default new UserRepositoryMySQL();
