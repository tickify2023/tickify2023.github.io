import conn from "src/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { filtro, termino } = await request.json();
    const filter = filtro === "Evento" ? "name" : "artist";
    const search = termino.replace("%20", " ");

    const { rows } = await conn.query(
      `SELECT * FROM events WHERE ${filter} ILIKE $1`,
      [`%${search}%`]
    );

    console.log("rows", rows);
    const response = rows.length > 0 ? rows : null;

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(null);
  }
}
