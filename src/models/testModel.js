const db = require('../config/database'); 

class Test {
  static async createTest(testScore, idMentor) {
    const query = `INSERT INTO test (test_score, id_mentor) VALUES ($1, $2) RETURNING *`;
    const values = [testScore, idMentor];
    const result = await db.query(query, values);
    return result.rows[0];
  }

 
  static async getTestById(testId) {
    const query = `SELECT * FROM test WHERE test_id = $1`;
    const result = await db.query(query, [testId]);
    return result.rows[0];
  }

 
  static async getAllTests() {
    const query = `SELECT * FROM test`;
    const result = await db.query(query);
    return result.rows;
  }

 
  static async updateTest(testId, testScore, idMentor) {
    const query = `UPDATE test SET test_score = $1, id_mentor = $2 WHERE test_id = $3 RETURNING *`;
    const values = [testScore, idMentor, testId];
    const result = await db.query(query, values);
    return result.rows[0];
  }

 
  static async deleteTest(testId) {
    const query = `DELETE FROM test WHERE test_id = $1`;
    await db.query(query, [testId]);
  }
}

module.exports = Test;
