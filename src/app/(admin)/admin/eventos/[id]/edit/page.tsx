import { EventEdit } from "@/components/admin/eventos/EventEdit";
import { Event } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventoAdmin({ params }: Props) {
  const event: Event = await simpleFetch(`events/${params.id}`, "ssr");

  return <>{event && <EventEdit event={event} />}</>;
}
