import conn from "src/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { rows } = await conn.query("SELECT * FROM events");

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  try {
    const { name, description, date, image, artist, location, tickets } =
      await request.json();

    // Create a new event in the database using the extracted information
    const { rows } = await conn.query(
      "INSERT INTO events (name, description, date, image, artist, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [name, description, date, image, artist, location]
    );

    const eventId = rows[0].id;

    // Create tickets for the new event
    for (const ticket of tickets) {
      const { price, type, max_quantity } = ticket;
      await conn.query(
        "INSERT INTO tickets (event_id, price, type, max_quantity) VALUES ($1, $2, $3, $4)",
        [eventId, price, type, max_quantity]
      );
    }

    return NextResponse.json(eventId);
  } catch (error) {
    return NextResponse.json(error);
  }
}
