import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Retrieve the ticket with the given id
    const { rows: tickets } = await conn.query(
      "SELECT * FROM tickets WHERE id = $1",
      [id]
    );

    return NextResponse.json(tickets[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { price, type, max_quantity } = await req.json();
    // Update the ticket in the database using the extracted information
    await conn.query(
      "UPDATE tickets SET price = $1, type = $2, max_quantity = $3 WHERE id = $4",
      [price, type, max_quantity, id]
    );

    return NextResponse.json({ message: "Ticket updated successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Delete the ticket from the database
    await conn.query("DELETE FROM tickets WHERE id = $1", [id]);

    return NextResponse.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
