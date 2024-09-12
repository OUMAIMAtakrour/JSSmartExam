const db = require('../config/database');

class Subject {
  static async create(subjectName, parentSubjectId = null) {
    const query = 'INSERT INTO subject (subject_name, parent_subject_id) VALUES ($1, $2) RETURNING *';
    const values = [subjectName, parentSubjectId];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error creating subject:', err);
      throw err;
    }
  }

  static async findAll() {
    const query = 'SELECT * FROM subject';
    
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (err) {
      console.error('Error fetching subjects:', err);
      throw err;
    }
  }

  static async findById(subjectId) {
    const query = 'SELECT * FROM subject WHERE subject_id = $1';
    const values = [subjectId];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error fetching subject:', err);
      throw err;
    }
  }

  static async update(subjectId, subjectName, parentSubjectId = null) {
    const query = 'UPDATE subject SET subject_name = $1, parent_subject_id = $2 WHERE subject_id = $3 RETURNING *';
    const values = [subjectName, parentSubjectId, subjectId];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error updating subject:', err);
      throw err;
    }
  }

  static async delete(subjectId) {
    const query = 'DELETE FROM subject WHERE subject_id = $1 RETURNING *';
    const values = [subjectId];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error deleting subject:', err);
      throw err;
    }
  }
}

module.exports = Subject;