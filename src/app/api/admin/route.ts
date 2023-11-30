import conn from "src/db";
import { NextResponse } from "next/server";
import { hashPass } from "src/utils/bcrypt";

export async function GET(request: Request) {
  try {
    const { rows } = await conn.query("SELECT * FROM admins");

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const hashedPassword = hashPass(password);
    const role = "Vendedor";

    const { rows } = await conn.query(
      "INSERT INTO admins (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id",
      [username, email, hashedPassword, role]
    );

    const adminId = rows[0].id;

    return NextResponse.json(adminId);
  } catch (error) {
    return NextResponse.json(null);
  }
}
