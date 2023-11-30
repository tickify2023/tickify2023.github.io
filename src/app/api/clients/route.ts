import conn from "src/db";

export async function GET(request: Request) {
  const { rows } = await conn.query("SELECT * FROM clients");
  return {
    status: 200,
    body: rows,
  };
}
