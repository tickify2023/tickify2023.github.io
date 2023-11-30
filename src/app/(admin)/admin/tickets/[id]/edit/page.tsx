import { Ticket } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";
import { TicketEdit } from "@/components/admin/tickets/TicketEdit";

interface Props {
  params: {
    id: string;
  };
}

export default async function TicketAdmin({ params }: Props) {
  const ticket: Ticket = await simpleFetch(`tickets/${params.id}`, "ssr");

  return <>{ticket && <TicketEdit ticket={ticket} />}</>;
}
