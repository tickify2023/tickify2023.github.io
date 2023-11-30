import conn from "src/db";
import { NextResponse } from "next/server";
import { isSamePass } from "../../../../utils/bcrypt/index";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const { rows } = await conn.query("SELECT * FROM admins WHERE email = $1", [
      email,
    ]);
    if (rows.length === 0) {
      return NextResponse.json(null);
    }
    const adminPassword = rows[0].password;
    // console.log("adminPassword", adminPassword);
    const isPasswordValid = isSamePass(password, adminPassword);
    // console.log("isPasswordValid", isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json(null);
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json(null);
  }
}
