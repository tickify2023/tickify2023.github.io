import { Pool } from "pg";

let conn: any;
 
if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT ? parseInt(process.env.PGSQL_PORT) : 5432,
    database: process.env.PGSQL_DB,
    ssl: {
      rejectUnauthorized: false,
    },
    // native: false,
  });
}

export default conn;
