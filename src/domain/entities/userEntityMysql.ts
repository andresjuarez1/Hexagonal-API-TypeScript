import { connectMysql } from '../../infrastructure/adapters/mysqlAdapter';

interface IUserMySQL {
  id: number;
  email: string;
  password: string;
  verified_at: number;
  created_at: number;
  verified: boolean;
}

class UserEntityMySQL {
  static async findById(userId: number): Promise<IUserMySQL | null> {
    try {
      const connection = await connectMysql();
      const query = 'SELECT * FROM users WHERE id = ?';
      
      return new Promise<IUserMySQL | null>((resolve, reject) => {
        connection.query(query, [userId], (error, results) => {
          connection.end();   
          if (error) {
            reject(error);
          } else {
            const user = results[0];
            resolve(user || null);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

export { UserEntityMySQL, IUserMySQL };
