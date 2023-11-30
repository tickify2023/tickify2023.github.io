import { EntradasFilter } from "@/components/admin/entradas/EntradasFilter";
import { ClientTicket } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  const clientTickets: ClientTicket[] = await simpleFetch(
    `events/${params.id}/entradas`,
    "ssr"
  );
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="page-header">Listado de entradas</h2>
      </div>
      <hr className="mb-3" />

      <EntradasFilter entradas={clientTickets}></EntradasFilter>
    </>
  );
}
