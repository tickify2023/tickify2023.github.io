import conn from "src/db";
import { NextResponse } from "next/server";
import { hashPass } from "src/utils/bcrypt";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { rows } = await conn.query("SELECT * FROM admins WHERE id = $1", [
      id,
    ]);

    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { username, email, password } = await req.json();
    const hashedPassword = hashPass(password);

    await conn.query(
      "UPDATE admins SET username = $1, email = $2, password = $3 WHERE id = $4",
      [username, email, hashedPassword, id]
    );

    return NextResponse.json({ message: "Admin updated successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
