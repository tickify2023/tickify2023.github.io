import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { rows } = await conn.query(
      "SELECT * FROM events where active = true"
    );

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(error);
  }
}
