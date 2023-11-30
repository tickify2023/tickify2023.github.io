import React from "react";
import { Event } from "src/interfaces";
import dateFormat from "src/utils/dateFormat";

export const Card = ({ event }: { event: Event }) => {
  const date = new Date(event.date);
  const formatedDate = dateFormat(date);
  return (
    <div className="example-2 card">
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="header">
          <div className="date">
            <span className="day">{formatedDate}</span>
          </div>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">{event.artist}</span>
            <br />
            <h1 className="title hover-underline-animation">
              <a href="#">{event.name}</a>
            </h1>
            <p className="text">{event.description}</p>
            <div className="d-flex justify-content-center">
              <a
                href={`/evento/${event.id}`}
                className="btn-action btn-action-lg"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
