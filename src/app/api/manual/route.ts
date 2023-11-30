import conn from "src/db";
import { NextResponse } from "next/server";
import baseUrl from "../../../utils/baseUrl";
import { paymentData } from "src/interfaces";

export async function POST(request: Request) {
  try {
    const body: paymentData = await request.json();

    const items = body.tickets.map((ticket) => {
      return {
        id: ticket.id,
        title: ticket.type,
        description: "ticket",
        quantity: Number(ticket.quantity),
        currency_id: "ARS",
        unit_price: Number(ticket.price),
      };
    });

    const total = body.tickets.reduce((acc, ticket) => {
      return acc + Number(ticket.price) * Number(ticket.quantity);
    }, 0);

    const sale = await conn.query(
      `INSERT INTO sales (total, email, name, phone) VALUES ($1, $2, $3, $4) RETURNING *`,
      [total, body.email, body.name, body.phone]
    );

    const saleId = sale.rows[0].id;

    const ticketSale = await Promise.all(
      body.tickets.map((ticket) => {
        return conn.query(
          `INSERT INTO ticketsales (sale_id, ticket_id, quantity) VALUES ($1, $2, $3) RETURNING *`,
          [saleId, Number(ticket.id), Number(ticket.quantity)]
        );
      })
    );

    const returnUrl = `${baseUrl}/admin/manual/sales/${saleId}`;
    const preference = `MANUAL_${saleId}`;

    //update sale with mercadoId as preference_id
    await conn.query(`UPDATE sales SET preference_id = $1 WHERE id = $2`, [
      preference,
      saleId,
    ]);

    return NextResponse.json({ returnUrl });
  } catch (error) {
    return NextResponse.json(error);
  }
}
