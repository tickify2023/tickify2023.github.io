import { Pool } from "pg";

let conn: any;
 
//Si la variable conn no está definida, se crea un nuevo objeto Pool 
//con los parámetros de conexión especificados en 
//las variables de entorno. 
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
