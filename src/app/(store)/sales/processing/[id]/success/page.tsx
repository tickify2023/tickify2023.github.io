import Banner from "@/components/generic/Banner";
import { GreyTicket } from "@/components/tickets/GreyTicket";
import { simplePost } from "src/utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventoShow({ params }: Props) {
  console.log("12", params.id);
  const state = {
    status: "success",
  };
  const sale: any = await simplePost(`sales/processing/${params.id}`, state);
  console.log("16 sale", sale);
  const { clientTickets, event } = sale;
  return (
    <>
      <Banner
        banner_url="https://i.imgur.com/uuTQw6t.png"
        text=""
        position="center"
      ></Banner>
      <div className="container mt-5 mb-5 pt-md-5 pb-md-5 ">
        <h1>Su compra se ha realizado con exito</h1>
        <p>
          Se enviara un copia de los tickets a su correo electronico, gracias
          por su compra
        </p>

        <div className="row">
          {clientTickets.map((ticket: any) => {
            return (
              <div key={ticket.id} className="mb-3 col-12 col-md-6 col-lg-4">
                <GreyTicket ticket={ticket} event={event}></GreyTicket>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
