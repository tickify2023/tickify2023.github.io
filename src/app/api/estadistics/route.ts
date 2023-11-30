import { NextResponse } from "next/server";
import conn from "src/db";

export async function GET(request: Request) {
  // get all the events active , the count
  try {
    const activeEvents = await conn.query(
      "SELECT COUNT(*) FROM events WHERE active = true"
    );
    const activeEventsCount = activeEvents.rows[0].count;

    // get the count of all the events
    const allEvents = await conn.query("SELECT COUNT(*) FROM events");
    const allEventsCount = allEvents.rows[0].count;

    // get the count of all the clienttickets
    const allClientTickets = await conn.query(
      "SELECT COUNT(*) FROM clienttickets"
    );
    const allClientTicketsCount = allClientTickets.rows[0].count;

    //get the count of all sales status success
    const allSalesSuccess = await conn.query(
      "SELECT COUNT(*) FROM sales WHERE status = 'success'"
    );
    const allSalesSuccessCount = allSalesSuccess.rows[0].count;

    return NextResponse.json({
      activeEventsCount,
      allEventsCount,
      allClientTicketsCount,
      allSalesSuccessCount,
    });
  } catch (error) {
    return NextResponse.json(null);
  }
}
