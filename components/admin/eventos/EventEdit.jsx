"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "src/hooks/useForm";
import { createFormDate, getFormDate, getFormTime } from "src/utils/dateFormat";
import { simplePut } from "src/utils/simpleFetch";

export const EventEdit = ({ event }) => {
  const tickets = event.tickets || [];
  const time = getFormTime(`${event.date}`);
  const date = getFormDate(`${event.date}`);
  const router = useRouter();

  const [formValues, handleInputChange] = useForm({
    name: event.name,
    artist: event.artist,
    description: event.description,
    date: date,
    time: time,
    location: event.location,
    img: event.image,
    fee: event.fee,
  });

  const updateEvent = async (e) => {
    e.preventDefault();
    const newDate = createFormDate(formValues.date, formValues.time);
    const eventData = {
      name: formValues.name,
      artist: formValues.artist,
      description: formValues.description,
      date: newDate,
      location: formValues.location,
      image: formValues.img,
      fee: formValues.fee,
    };
    console.log("event date:", event.date, "newDate:", newDate);
    console.log(eventData);
    const edit = await simplePut(`events/${event.id}`, eventData);
    router.push(`/admin/eventos/${event.id}`);
  };

  return (
    <form onSubmit={(e) => updateEvent(e)}>
      <h1>Editor de eventos:</h1>
      <hr />
      <div className="event row m-3 pb-2">
        <div className="product-img col-12 col-md-5 col-lg-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="John Doe"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="nameInput">Nombre del evento</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="artistInput"
              name="artist"
              placeholder="John Doe"
              value={formValues.artist}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="artistInput">Nombre del Artista</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="descriptionInput"
              name="description"
              placeholder="John Doe"
              value={formValues.description}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="descriptionInput">Descripción</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="dateInput"
              name="date"
              placeholder="John Doe"
              value={formValues.date}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="dateInput">Fecha</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="time"
              className="form-control"
              id="timeInput"
              name="time"
              value={formValues.time}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="timeInput">Hora</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="locationInput"
              name="location"
              placeholder="John Doe"
              value={formValues.location}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="locationInput">Lugar</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="imgInput"
              name="img"
              placeholder="John Doe"
              value={formValues.img}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="imgInput">Url de Imagen</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="imgInput"
              name="fee"
              placeholder="John Doe"
              value={formValues.fee}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="imgInput">Costo del servicio</label>
          </div>
        </div>
        <div className="product-info col-12 col-md-5 col-lg-4 bg-dot">
          <div className="tickets">
            <h5>Editar Tickets :</h5>
            {tickets.map((ticket) => (
              <div key={ticket.id} className="d-flex gap-2">
                <p>
                  {ticket.type}: ${ticket.price}
                </p>
                <Link
                  className="text-dark"
                  href={`/admin/tickets/${ticket.id}/edit`}
                >
                  Editar
                </Link>
              </div>
            ))}
            <button className="btn btn-dark w-100" type="submit">
              Guardar cambios
            </button>
            <Link
              href={`admin/eventos/${event.id}`}
              className="btn btn-dark w-100 mt-3"
              type="button"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
