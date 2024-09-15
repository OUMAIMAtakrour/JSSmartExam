const db = require('../config/database'); 

class User {
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(query, [email]);
      return rows[0];
    } catch (error) {
      console.error('Error in findByEmail:', error);
      throw error;
    }
  }

}

module.exports = User;