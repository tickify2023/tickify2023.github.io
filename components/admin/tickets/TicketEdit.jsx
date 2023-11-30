"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "src/hooks/useForm";
import { simplePut } from "src/utils/simpleFetch";

export const TicketEdit = ({ ticket }) => {
  const { id, price, type, max_quantity } = ticket;
  const router = useRouter();

  const [formValues, handleInputChange] = useForm({
    price: price,
    type: type,
    max_quantity: max_quantity,
  });

  const updateTicket = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const edit = await simplePut(`tickets/${id}`, formValues);
    router.push(`/admin/eventos/${ticket.event_id}/edit`);
  };

  return (
    <form onSubmit={(e) => updateTicket(e)}>
      <h1>Editor de ticket:</h1>
      <hr />
      <div className="event row m-3 pb-2">
        <div className="product-img col-12 col-md-5 col-lg-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="typeInput"
              name="type"
              placeholder="John Doe"
              value={formValues.type}
              onChange={handleInputChange}
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
              value={formValues.price}
              onChange={handleInputChange}
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
              value={formValues.max_quantity}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="max_quantityInput">Cantidad máxima</label>
          </div>

          <button className="btn btn-dark w-100" type="submit">
            Guardar cambios
          </button>
          <Link
            href={`admin/eventos/${ticket.event_id}/edit`}
            className="btn btn-dark w-100 mt-3"
            type="button"
          >
            Volver
          </Link>
        </div>
      </div>
    </form>
  );
};
