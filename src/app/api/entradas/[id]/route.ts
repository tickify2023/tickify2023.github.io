import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    //Update clienttickets with the given id : used to true
    const { rows: clientTickets } = await conn.query(
      `UPDATE clienttickets SET used = true WHERE id = ${id} RETURNING *`
    );
    return NextResponse.json({ updated: true });
  } catch (error) {
    return NextResponse.json({ updated: false });
  }
}
