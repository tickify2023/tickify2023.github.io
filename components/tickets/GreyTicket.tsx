import React from "react";
import { Event, mixedTicket } from "../../src/interfaces/index";
import { shortFormatDate } from "src/utils/dateFormat";

export const GreyTicket = ({
  ticket,
  event,
}: {
  ticket: mixedTicket;
  event: Event;
}) => {
  return (
    <div
      className="l-col-right ticket-wrap"
      aria-label="A fake boat ticket demonstrating mixing font weights and widths"
    >
      <div className="ticket" aria-hidden="true">
        <div className="ticket__header d-flex">
          <div className="ticket__co">
            <span className="ticket__co-name">{event.name}</span>
            <span className="u-upper ticket__co-subname">{event.artist}</span>
          </div>
        </div>
        <div className="ticket__body">
          <p className="ticket__route">{ticket.type}</p>
          <p className="ticket__description">{ticket.code}</p>
          <div className="ticket__timing">
            <p>
              <span className="u-upper ticket__small-label">Fecha</span>
              <span className="ticket__detail">
                {shortFormatDate(`${event.date}`)}
              </span>
            </p>
            <p>
              <span className="u-upper ticket__small-label">Lugar</span>
              <span className="ticket__detail">{event.location}</span>
            </p>
            {/* <p>
              <span className="u-upper ticket__small-label">Boarding</span>
              <span className="ticket__detail">10:00 am</span> */}
            {/* </p> */}
          </div>
          <p className="ticket__fine-print ">
            Este ticket es valido para una sola entrada
          </p>
          {/* <p className="u-upper ticket__admit">Admit one adult</p> */}
          <img
            className="ticket__barcode"
            src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${ticket.code}&choe=UTF-8&chld=L|0`}
            alt="Fake barcode"
          />
        </div>
      </div>
    </div>
  );
};
