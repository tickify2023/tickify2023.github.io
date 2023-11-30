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
      <h2 className="page-header">La orden manual se creo exitosamente</h2>
      <hr className="mb-3" />
      <div className="container">
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
