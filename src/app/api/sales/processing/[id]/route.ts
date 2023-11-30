import conn from "src/db";
import { NextResponse } from "next/server";
import baseUrl from "src/utils/baseUrl";

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const body: any = await request.json();
    console.log("body 6", body);
    console.log("id 7", id);
    // Retrieve the sale with the given id
    const { rows: sales } = await conn.query(
      "SELECT * FROM sales WHERE id = $1  LIMIT 1",
      [id]
    );

    console.log("sales 14", sales);

    if (sales.length === 0) {
      return NextResponse.json({ error: "Sale not found" }, { status: 404 });
    }

    console.log("body 21", body);

    // Update the sale with the given id
    await conn.query("UPDATE sales SET status = $1 WHERE id = $2", [
      body.status,
      id,
    ]);

    let response = sales[0];

    console.log("response 28", response);

    if (body.status === "success") {
      // Send an email to the user
      console.log("sales[0].mail 32", sales[0].mail);
      if (sales[0].mail === false) {
        await conn.query("UPDATE sales SET mail = $1 WHERE id = $2", [
          true,
          id,
        ]);

        const mailBody = {
          url: `${baseUrl}/sales/processing/${id}/success`,
          email: sales[0].email,
          name: sales[0].name,
        };

        const mailResponse = await fetch(`${baseUrl}/api/mails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailBody),
        });

        console.log("mailResponse 160", mailResponse);
      }

      // export interface Transaction {
      //   id: number;
      //   sale_id_fk: number;
      //   amount: number;
      //   date: number;
      // }

      // Create a transaction
      const transaction = await conn.query(
        "INSERT INTO transactions (sale_id, amount, date) VALUES ($1, $2, $3) RETURNING *",
        [id, Number(sales[0].total), new Date().toISOString()]
      );

      console.log("transaction 44", transaction);

      // to get the missing info first we need to get tickets sale where sale_id = id
      // export interface TicketSale {
      //   id: number;
      //   sale_id: number;
      //   ticket_id: number;
      //   quantity: number;
      // }

      const { rows: ticketSales } = await conn.query(
        "SELECT * FROM ticketsales WHERE sale_id = $1",
        [id]
      );

      console.log("ticketSales 59", ticketSales);

      // then we need to get the ticket info where ticket_id = ticket_id
      // export interface Ticket {
      //   id?: number;
      //   event_id_fk: number;
      //   price: number;
      //   type: string;
      //   max_quantity: number;
      // }

      const { rows: tickets } = await conn.query(
        "SELECT * FROM tickets WHERE id = ANY($1)",
        [ticketSales.map((ticketSale: any) => ticketSale.ticket_id)]
      );

      console.log("tickets 76", tickets);
      // now we are going to create the client tickets
      // export interface ClientTicket {
      //   id: number;
      //   ticket_id_fk: number;
      //   transaction_id_fk: number;
      //   code: string;
      // }

      const clientTickets = ticketSales.map(async (ticketSale: any) => {
        const ticketArray = Array(ticketSale.quantity).fill(ticketSale);

        const arrayOfTicketSales = ticketArray.map(async (ticketSale: any) => {
          const code = `${
            tickets.find((ticket: any) => ticket.id === ticketSale.ticket_id)
              .event_id
          }${ticketSale.ticket_id}${Math.floor(Math.random() * 10000)}`;

          const result = await conn.query(
            "INSERT INTO clienttickets (ticket_id_fk, transaction_id_fk, code) VALUES ($1, $2, $3) RETURNING *",
            [ticketSale.ticket_id, transaction.rows[0].id, code]
          );

          return result.rows[0];
        });

        return Promise.all(arrayOfTicketSales);
      });

      const clientTicketsArray = await Promise.all(clientTickets);
      const flattenedClientTickets = clientTicketsArray.flat();

      console.log("flattenedClientTickets", flattenedClientTickets);

      // now we need to update the ticket quantity
      const updatedTickets = tickets.map((ticket: any) => {
        // we need to get the quantity of tickets sold
        const quantitySold = ticketSales.find(
          (ticketSale: any) => ticketSale.ticket_id === ticket.id
        ).quantity;

        console.log("quantitySold 112", quantitySold);
        console.log("ticket 113", ticket);

        return conn.query(
          "UPDATE tickets SET max_quantity = $1 WHERE id = $2",
          [ticket.max_quantity - quantitySold, ticket.id]
        );
      });

      await Promise.all(updatedTickets);

      // add to each client ticket the type and price of the ticket but just for the object that we are going to return

      let clientTicketsWithInfo = await Promise.all(flattenedClientTickets);
      console.log("clientTicketsWithInfo 124", clientTicketsWithInfo);

      clientTicketsWithInfo = clientTicketsWithInfo.map((clientTicket: any) => {
        console.log("clientTicket 127", clientTicket);

        const ticket = tickets.find(
          (ticket: any) => ticket.id === clientTicket.ticket_id_fk
        );

        console.log("ticket 128", ticket);

        return {
          ...clientTicket,
          type: ticket.type,
          price: ticket.price,
        };
      });

      // we are going to add the event to the response , all the tickets have the same event so we can just get the first one

      const { rows: events } = await conn.query(
        "SELECT * FROM events WHERE id = $1",
        [tickets[0].event_id]
      );

      response = {
        ...response,
        clientTickets: clientTicketsWithInfo,
        event: events[0],
      };

      console.log("response 139", response);
    }

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
