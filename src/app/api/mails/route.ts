import conn from "src/db";
import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const body: any = await request.json();
    const { name, email, url } = body;

    const msg = {
      to: email,
      from: "tickify.arg@gmail.com",
      subject: `Tu compra fue realizada exitosamente`,
      html: `<p>Gracias por tu compra  <strong>${name}!</strong></p>
      <p>Visita la siguiente URL para ver tus tickets</p>
      <p><strong >${url}</strong></p>
      <p>Si tenes algun problema, contactanos atraves de este mail</p>
      <p>Saludos!</p>
      <p>Equipo de Tickify</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
