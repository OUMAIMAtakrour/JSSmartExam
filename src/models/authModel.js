const db = require('../config/database');

class User {
  static async findByEmail(email) {
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      return result.rows[0]; 
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }
}

module.exports = User;
