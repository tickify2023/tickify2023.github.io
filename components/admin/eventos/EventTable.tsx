import React from "react";
import { Event } from "src/interfaces";
import { EventTr } from "./EventTr";

export const EventTable = ({
  events,
  manual = false,
}: {
  events: Event[];
  manual?: boolean;
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="text-center">ID</th>
          <th>Evento</th>
          <th className="text-center">Fecha</th>
          {manual === false && <th className="text-center">Estado</th>}
          <th>Ver</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <EventTr key={event.id} event={event} manual={manual} />
        ))}
      </tbody>
    </table>
  );
};
