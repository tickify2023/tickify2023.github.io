import { EventTable } from "@/components/admin/eventos/EventTable";
import Link from "next/link";
import { Event } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

export default async function Home() {
  const events: Event[] = await simpleFetch("events", "ssr");
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="page-header">Listado de eventos</h2>
        <div>
          <Link href={"/admin/eventos/crear"} className="btn btn-dark  ">
            Crear evento
          </Link>
        </div>
      </div>
      <hr className="mb-3" />

      <EventTable events={events}></EventTable>
    </>
  );
}
