"use client";
import React from "react";
import { Event, Ticket } from "src/interfaces";
import dateFormat, { getFormTime } from "src/utils/dateFormat";
import { TfiDirectionAlt } from "react-icons/tfi";

export const EventDescription = ({
  event,
  setToggle,
  handleToggle,
}: {
  event: Event;
  setToggle: any;
  handleToggle: any;
}) => {
  const tickets: Ticket[] = event.tickets || [];
  const date = new Date(event.date);
  const formattedDate = dateFormat(date);
  const time = getFormTime(`${date}`);
  return (
    <div className="product-info col-12 col-md-5 col-lg-4 bg-dot">
      <div className="product-text">
        <h1>{event.name}</h1>
        <h4>{event.artist}</h4>
        <p>{event.description}</p>
        <p>Fecha: {formattedDate}</p>
        <p onClick={() => handleToggle()} className="clickeable underlined">
          Lugar: {event.location} <TfiDirectionAlt />
        </p>
        <p>Hora: {time}hs</p>
      </div>
      <div className="tickets">
        <h5>Tickets disponibles:</h5>
        {tickets.map((ticket: Ticket) => (
          <p key={ticket.id}>
            {ticket.type}: ${ticket.price}
          </p>
        ))}
        <p className="text-small fs-6 text">Tarifa de servicio: {event.fee}%</p>
        <button
          className="btn-action-lg btn-action"
          type="button"
          onClick={() => setToggle(true)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
