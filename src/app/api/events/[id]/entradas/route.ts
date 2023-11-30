import conn from "src/db";
import { NextResponse } from "next/server";
import { ClientTicket } from "src/interfaces";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Retrieve the tickets from the event with the given id
    const ticketsIds = `SELECT id FROM tickets WHERE event_id = ${id}`;
    const { rows: clientTickets } = await conn.query(
      `SELECT * from clienttickets where ticket_id_fk in (${ticketsIds}) order by code asc`
    );
    //Retrive the tickets from the event with the given id
    const { rows: tickets } = await conn.query(
      `SELECT id , type from tickets where event_id = ${id}`
    );

    interface ShortTicket {
      id: number;
      type: string;
    }

    // Add the tickets to the clientTickets object matching  the ticket_id_fk
    clientTickets.forEach((clientTicket: ClientTicket) => {
      const ticket = tickets.find(
        (ticket: ShortTicket) => ticket.id === clientTicket.ticket_id_fk
      );
      clientTicket.type = ticket.type;
    });

    return NextResponse.json(clientTickets);
  } catch (error) {
    return NextResponse.json(error);
  }
}
