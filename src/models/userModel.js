const pool = require('../config/database');  

const getUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
        
    } catch (err) {
        console.error('Database query error:', err);  
        throw err;  
    }
};


const createUser = async (firstName, lastName, birthDate, userImage ,address ,subscriptionDate, password) => {
    const query = `
        INSERT INTO users (first_name, last_name, birth_date, user_image, adress, subscribssion_date, password)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [firstName, lastName, birthDate, userImage ,address, subscriptionDate, password];
    await pool.query(query, values);
};




const updateUser = async (userId, firstName, lastName, birthDate, userImage, address, subscriptionDate, password) => {
    const query = `
        UPDATE users
        SET first_name = $1, last_name = $2, birth_date = $3, user_image = $4, adress = $5, subscribssion_date = $6, password = $7
        WHERE user_id = $8
    `;
    const values = [firstName, lastName, birthDate, userImage, address, subscriptionDate, password, userId];
    try {
        await pool.query(query, values);
    } catch (err) {
        console.error('Database update error:', err.message);
        throw err;
    }
};


const deleteUser = async (userId) => {
    await pool.query('DELETE FROM users WHERE user_id = $1', [userId]);
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
