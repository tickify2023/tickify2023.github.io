import Link from "next/link";
import React from "react";
import { Event, Ticket } from "src/interfaces";
import dateFormat from "src/utils/dateFormat";
import { getFormTime } from "../../../src/utils/dateFormat";

function EventView({ event }: { event: Event }) {
  const tickets: Ticket[] = event.tickets || [];
  const date = new Date(event.date);
  const formatedDate = dateFormat(date);
  const formatedTime = getFormTime(`${date}`);

  return (
    <div className="event row m-3 pb-2">
      <div className="product-img col-12 col-md-5 col-lg-4">
        <img src={event.image} className="img-fluid" />
      </div>
      <div className="product-info col-12 col-md-5 col-lg-4 bg-dot">
        <div className="product-text">
          <h1>{event.name}</h1>
          <h4>{event.artist}</h4>
          <p>{event.description}</p>
          <p>Fecha: {formatedDate}</p>
          <p>Lugar: {event.location}</p>
          <p>Hora: {formatedTime}hs </p>
        </div>
        <div className="tickets">
          <h5>Tickets disponibles:</h5>
          {tickets.map((ticket: Ticket) => (
            <p key={ticket.id}>
              {ticket.type}: ${ticket.price}
            </p>
          ))}
          <p className="text-small fs-6 text js-fee">
            Tarifa de servicio: {event.fee}%
          </p>
          <Link
            href={`admin/eventos/${event.id}/edit`}
            className="btn btn-dark w-100"
            type="button"
          >
            Editar
          </Link>
          <Link
            className="btn btn-dark w-100 mt-3"
            type="button"
            href={`/admin/eventos/${event.id}/entradas`}
          >
            Ver entradas
          </Link>
          <Link href={"/admin"} className="btn  w-100 mt-3" type="button">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventView;
