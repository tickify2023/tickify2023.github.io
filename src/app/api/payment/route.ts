import { NextResponse } from "next/server";
import baseUrl from "../../../utils/baseUrl";
import { paymentData } from "src/interfaces";
import conn from "src/db";

export async function POST(request: Request) {
  try {
    const body: paymentData = await request.json();

    const fee = body.fee;
    const items = body.tickets.map((ticket) => {
      return {
        id: ticket.id,
        title: ticket.type,
        description: "ticket",
        quantity: Number(ticket.quantity),
        currency_id: "ARS",
        unit_price:
          Number(ticket.price) + (Number(ticket.price) * Number(fee)) / 100,
      };
    });

    let total = body.tickets.reduce((acc, ticket) => {
      return acc + Number(ticket.price) * Number(ticket.quantity);
    }, 0);

    console.log("linea 27", total);

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

    const mercadopago = require("mercadopago");

    mercadopago.configure({
      access_token:
        "TEST-131179159692159-082919-c33f25aebbdd6a5730233e99c77f73b1-186609682",
    });

    // Crea un objeto de preferencia
    let preference = {
      items: items,
      back_urls: {
        success: `${baseUrl}/sales/processing/${saleId}/success`,
        failure: `${baseUrl}/sales/processing/${saleId}/failure`,
        pending: `${baseUrl}/sales/processing/${saleId}/pending`,
      },
      payment_methods: {
        excluded_payment_types: [
          {
            id: "ticket",
          },
        ],
        // installments: 3,
      },
    };

    const mercadoId = await mercadopago.preferences
      .create(preference)
      .then(function (response: any) {
        console.log("linea 71", response.body);
        return response.body.id;
      })
      .catch(function (error: any) {
        console.log(error);
      });

    if (typeof mercadoId === "string") {
      //update sale with mercadoId as preference_id
      await conn.query(`UPDATE sales SET preference_id = $1 WHERE id = $2`, [
        mercadoId,
        saleId,
      ]);
    }

    return NextResponse.json({ mercadoId });
  } catch (error) {
    return NextResponse.json(error);
  }
}
