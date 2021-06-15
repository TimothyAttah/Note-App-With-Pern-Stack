const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "timothy",
  host: "localhost",
  port: "5432",
  database: "note3sixty"
})

module.exports = pool;
