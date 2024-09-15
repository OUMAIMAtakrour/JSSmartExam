const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "JSSmartExam",
<<<<<<< HEAD
  password: "mohammed20040303",
=======
  password: "123",
>>>>>>> omar
  port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
  };
