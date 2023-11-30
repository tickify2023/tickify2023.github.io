import React, { useRef, useState } from "react";
import { useForm } from "src/hooks/useForm";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { simplePost } from "src/utils/simpleFetch";
import { useRouter } from "next/navigation";
import { IoTicketSharp } from "react-icons/io5";

initMercadoPago("TEST-4317bc7e-4dfa-41fc-ac92-36ee56c1f282", {
  locale: "es-AR",
});

export const UserForm = ({ tickets, setToggle, manual }) => {
  const [ml, setMl] = useState("");
  const [loading, setLoading] = useState(false);
  const wallet = useRef(null);
  const error = useRef(null);
  const router = useRouter();
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    phone: "",
    ...tickets.reduce((obj, ticket) => {
      return {
        ...obj,
        [`ticket-${ticket.id}`]: "",
      };
    }, {}),
  });

  const handleNumberInputChange = ({ target }, min, max) => {
    let value = parseInt(target.value);
    if (isNaN(value)) {
      value = 0;
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    target.value = value.toString();
    handleInputChange({ target });
  };

  const validateForm = (formValues, tickets) => {
    const hasRequiredValues =
      formValues.name &&
      formValues.phone &&
      formValues.email &&
      tickets.some((ticket) => formValues[`ticket-${ticket.id}`] > 0);

    return hasRequiredValues;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedTickets = Object.keys(formValues)
      .filter((key) => key.includes("ticket-"))
      .filter((key) => formValues[key] !== "" && formValues[key] > 0)
      .map((key) => {
        const ticket = tickets.find((ticket) => key === `ticket-${ticket.id}`);
        return {
          id: ticket.id,
          quantity: formValues[key],
          price: ticket.price,
          type: ticket.type,
        };
      });
    const fee = document.querySelector(".js-fee").dataset.fee;
    const data = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      tickets: selectedTickets,
      fee: fee,
    };

    if (manual === false) {
      setLoading(true);
      error.current.classList.add("d-none");
      wallet.current.classList.add("d-none");
      const preference = await simplePost("payment", data);
      console.log("preference", preference);
      setLoading(false);
      if (preference?.mercadoId) {
        setMl(preference.mercadoId);
        setTimeout(() => {
          wallet.current.querySelector("button")?.click();
        }, 3000);
        //take out d-none class
        wallet.current.classList.remove("d-none");
        wallet.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        error.current.classList.remove("d-none");
        console.log(preference);
        wallet.current.classList.add("d-none");
      }
    } else {
      // Path to manual payment
      const url = await simplePost("manual", data);
      router.push(url.returnUrl);
    }
  };

  return (
    <>
      <div className="product-info col-12 col-md-5 col-lg-4">
        <div className="product-text">
          <form className="user-data" onSubmit={(e) => handleSubmit(e)}>
            <h4>Seleccione sus entradas:</h4>
            {tickets.map((ticket) => (
              <div className="form-floating mb-3" key={`ticket-${ticket.id}`}>
                <input
                  type="number"
                  className="form-control"
                  id={`ticket-${ticket.id}`}
                  name={`ticket-${ticket.id}`}
                  placeholder="0"
                  min="0"
                  max={ticket.max_quantity}
                  value={formValues[`ticket-${ticket.id}`]}
                  onChange={(event) =>
                    handleNumberInputChange(event, 0, ticket.max_quantity)
                  }
                />
                <label htmlFor={`ticket-${ticket.id}`}>
                  {ticket.type} - ${ticket.price} <IoTicketSharp />
                </label>
              </div>
            ))}
            <h4>Datos del usuario:</h4>
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
              <label htmlFor="nameInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                placeholder="name@example.com"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="emailInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phoneInput"
                name="phone"
                placeholder="123-456-7890"
                value={formValues.phone}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phoneInput">Telefono</label>
            </div>

            <div className="d-flex gap-2 flex-column">
              {loading === false ? (
                <button
                  className="btn-action-lg btn-action"
                  type="submit"
                  disabled={!validateForm(formValues, tickets)}
                >
                  Finalizar
                </button>
              ) : (
                <button
                  className="btn-action-lg btn-action"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Cargando...
                </button>
              )}
              <div
                className="alert alert-danger d-flex align-items-center d-none"
                ref={error}
              >
                Ocurrio un error al procesar la operacion,
                <br />
                por favor intente nuevamente
              </div>

              <button
                className="btn btn-smaller btn-default"
                type="button"
                onClick={() => setToggle(false)}
              >
                Regresar
              </button>
            </div>
          </form>

          <div className="d-none" ref={wallet}>
            {ml !== "" && (
              <Wallet
                initialization={{
                  preferenceId: ml,
                  redirectMode: "modal",
                }}
              />
            )}
            <div className="alert alert-info d-flex align-items-center">
              En caso de no ser redirigido automaticamente, haga click en el
              boton
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
