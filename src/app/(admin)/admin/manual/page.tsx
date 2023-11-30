import { EventTable } from "@/components/admin/eventos/EventTable";
import { Event } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

export default async function Home() {
  const events: Event[] = await simpleFetch("events/active", "ssr");
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="page-header">Venta Manual</h2>
      </div>
      <hr className="mb-3" />

      <EventTable events={events} manual={true}></EventTable>
    </>
  );
}
