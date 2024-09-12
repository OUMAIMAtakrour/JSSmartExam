// models/UserModel.js
const pool = require('../config/database'); // Assuming you have your PostgreSQL connection in config/database.js

class UserModel {
    // Method to retrieve user data by ID
    static async show(userId) {
        try {
            const query = 'SELECT * FROM users WHERE user_id = $1';
            const result = await pool.query(query, [userId]);
            return result.rows[0]; // Return the first user found
        } catch (err) {
            console.error('Error fetching user:', err);
            throw err;
        }
    }
}

module.exports = UserModel;
