import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Retrieve the event with the given id
    const { rows: events } = await conn.query(
      "SELECT * FROM events WHERE id = $1",
      [id]
    );

    // Retrieve one ticket of each type for the event
    const { rows: tickets } = await conn.query(
      "SELECT DISTINCT ON (type) id, type, price, max_quantity FROM tickets WHERE event_id = $1",
      [id]
    );

    // Add the tickets to the event object
    events[0].tickets = tickets;
    console.log(events[0]);

    return NextResponse.json(events[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { name, description, date, image, artist, location, fee } =
      await req.json();

    // Update the event in the database using the extracted information
    const updateEvent = await conn.query(
      "UPDATE events SET name = $1, description = $2, date = $3, image = $4, artist = $5, location = $6 , fee = $7 WHERE id = $8",
      [name, description, date, image, artist, location, fee, id]
    );

    return NextResponse.json({ message: "Event updated successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Delete tickets associated with the event
    await conn.query("DELETE FROM tickets WHERE event_id = $1", [id]);

    // Delete the event
    await conn.query("DELETE FROM events WHERE id = $1", [id]);

    return NextResponse.json({
      message: "Event and associated tickets deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
