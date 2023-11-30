import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const toggle = `UPDATE events SET active = NOT active WHERE id = ${id}`;
    const fn = await conn.query(toggle);
    return NextResponse.json(fn);
  } catch (error) {
    return NextResponse.json(error);
  }
}
