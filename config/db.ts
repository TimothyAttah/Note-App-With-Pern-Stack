// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "timothy",
//   host: "localhost",
//   port: "5432",
//   database: "pernstack"
// })

// module.exports = pool;


const { Pool } = require('pg');

const pool = new Pool({
  // user: "postgres",
  // password: "timothy",
  // host: "localhost",
  // port: "5432",
  // database: "note3sixty"
});

module.exports = {
  query: (text: any, params: any) => pool.query(text, params)
}