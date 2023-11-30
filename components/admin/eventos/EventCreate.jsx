"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createFormDate } from "src/utils/dateFormat";
import { simplePost } from "src/utils/simpleFetch";

export const EventCreate = () => {
  const router = useRouter();
  const [service, setService] = useState([{ service: "" }]);
  const [formValues, setForm] = useState({
    name: "",
    artist: "",
    description: "",
    date: "",
    time: "",
    location: "",
    img: "",
    tickets: service,
  });

  const handleTickets = () => {
    setForm({ ...formValues, tickets: service });
  };

  const AddService = () => {
    setService([...service, { service: "" }]);
  };

  const RemoveService = (e, index) => {
    e.preventDefault();
    setService(service.filter((_, i) => i !== index));
  };

  const ChangeService = (e, index) => {
    const { name, value } = e.target;
    setService(
      service.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formValues, [name]: value });
  };

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
      tickets: formValues.tickets,
    };
    console.log("newDate:", newDate);
    console.log(eventData);
    const event = await simplePost(`events`, eventData);
    router.push(`/admin/eventos/${event}`);
  };

  return (
    <form onSubmit={(e) => updateEvent(e)}>
      <h1>Crear evento:</h1>
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

          <h3 className="mb-3">Crear Tickets :</h3>

          <div onChange={handleTickets}>
            {service.map((item, index) => (
              <div key={index}>
                <div className="border border-2 mb-3 p-3">
                  <h4>Ticket {index}</h4>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="typeInput"
                      name="type"
                      placeholder="John Doe"
                      value={item.type}
                      onChange={(e) => ChangeService(e, index)}
                      required
                    />
                    <label htmlFor="typeInput">Tipo de ticket</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="priceInput"
                      name="price"
                      placeholder="John Doe"
                      value={item.price}
                      onChange={(e) => ChangeService(e, index)}
                      required
                    />
                    <label htmlFor="priceInput">Precio</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="max_quantityInput"
                      name="max_quantity"
                      placeholder="John Doe"
                      value={item.max_quantity}
                      onChange={(e) => ChangeService(e, index)}
                      required
                    />
                    <label htmlFor="max_quantityInput">Cantidad máxima</label>
                  </div>
                </div>

                {service.length - 1 === index && service.length > 1 && (
                  <button
                    className="btn btn-danger text-light w-100 mb-2"
                    onClick={(e) => RemoveService(e, index)}
                  >
                    Eliminar ultimo ticket
                  </button>
                )}

                {service.length - 1 === index && (
                  <button
                    className="btn btn-info text-light w-100"
                    onClick={AddService}
                  >
                    Agregar otro ticket
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="product-info col-12 col-md-5 col-lg-4 bg-dot">
          <div className="tickets">
            {/*




            */}
            <button className="btn btn-dark w-100" type="submit">
              Guardar cambios
            </button>
            <Link
              href={"/admin"}
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
