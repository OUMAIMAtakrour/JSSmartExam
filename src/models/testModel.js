const db = require('../config/database');

class Test {
  static async createTest(testScore, idMentor, questionIds) {
    const client = await db.connect();
    try {
      await client.query('BEGIN'); 
    
      const testQuery = `INSERT INTO test (test_score, id_mentor) VALUES ($1, $2) RETURNING test_id`;
      const testResult = await client.query(testQuery, [testScore, idMentor]);
      const testId = testResult.rows[0].test_id; 

   
      for (const questionId of questionIds) {
        const questionAnswerQuery = `INSERT INTO question_answer (question_id, test_id) VALUES ($1, $2)`;
        await client.query(questionAnswerQuery, [questionId, testId]);
      }

      await client.query('COMMIT'); 
      return testId;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  static async getTestById(testId) {
    const query = `
      SELECT t.*, q.question_text, q.question_id
      FROM test t
      JOIN question_answer qa ON qa.test_id = t.test_id
      JOIN question q ON qa.question_id = q.question_id
      WHERE t.test_id = $1
    `;
    const result = await db.query(query, [testId]);
    return result.rows;
  }

  static async getAllTests() {
    const query = `SELECT * FROM test`;
    const result = await db.query(query);
    return result.rows;
  }

  static async updateTest(testId, testScore, idMentor, questionIds) {
    const client = await db.connect();
    try {
      await client.query('BEGIN');
     
      const testQuery = `UPDATE test SET test_score = $1, id_mentor = $2 WHERE test_id = $3`;
      await client.query(testQuery, [testScore, idMentor, testId]);

      
      const deleteQuestionsQuery = `DELETE FROM question_answer WHERE test_id = $1`;
      await client.query(deleteQuestionsQuery, [testId]);

      for (const questionId of questionIds) {
        const questionAnswerQuery = `INSERT INTO question_answer (question_id, test_id) VALUES ($1, $2)`;
        await client.query(questionAnswerQuery, [questionId, testId]);
      }

      await client.query('COMMIT'); 
    } catch (error) {
      await client.query('ROLLBACK'); 
      throw error;
    } finally {
      client.release();
    }
  }

  static async deleteTest(testId) {
    const query = `DELETE FROM test WHERE test_id = $1`;
    await db.query(query, [testId]);
  }
}

module.exports = Test;
