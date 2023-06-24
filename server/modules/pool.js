const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

pool_args = {
  host: "localhost",
  port: 5432,
  database: "react_gallery",
};

if (process.env.DB_USER) {
  pool_args.user = process.env.DB_USER;
}
if (process.env.DB_PASSWORD) {
  pool_args.password = process.env.DB_PASSWORD;
}

const pool = new pg.Pool(pool_args);

function testPool() {
  pool
    .query("SELECT * FROM gallery;")
    .then((result) => console.log(result.rows))
    .catch(console.error);
}

testPool();

module.exports = pool;
