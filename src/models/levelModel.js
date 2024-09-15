const pool = require('../config/database');

const getLevels = async () => {
    try {
        const result = await pool.query('SELECT * FROM level');
        return result.rows;
    } catch (err) {
        console.error('Database query error:', err); 
        throw err;  
    }
};
const getLevelById = async (levelId) => {
    const query = 'SELECT * FROM level WHERE level_id = $1';
    const values = [levelId];
    try {
        const result = await pool.query(query, values);
        console.log(result.rows[0]); 
        return result.rows[0];
    } catch (err) {
        console.error('Error fetching level by ID:', err.message);
        throw err;
    }
};



const createLevel = async (levelName, Description, minScore, maxScore) => {
    const query = `
        INSERT INTO level (level_name, description, min_score, max_score)
        VALUES ($1, $2, $3, $4)
    `;
    const values = [levelName, Description, minScore, maxScore];

    try {
        await pool.query(query, values);
    } catch (err) {
        console.error('Database query error:', err);
        throw err;
    }
};


const updateLevel = async (levelId, levelName, Description, minScore, maxScore) => {
    const query = `
        UPDATE level
        SET level_name = $1, description = $2, min_score = $3, max_score = $4
        WHERE level_id = $5
    `;
    const values = [levelName, Description, minScore, maxScore, levelId];
    try {
        await pool.query(query, values);
    } catch (err) {
        console.error('Database update error:', err.message);
        throw err;
    }
};




const deleteLevel = async (levelId) => {
    await pool.query('DELETE FROM level WHERE level_id = $1', [levelId]);
};

module.exports = {
    getLevels,
    getLevelById,
    createLevel,
    updateLevel,
    deleteLevel
};
