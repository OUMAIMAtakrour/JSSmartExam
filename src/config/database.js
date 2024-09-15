const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "JSSmartExam",
  password: "123",
  port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
  };
