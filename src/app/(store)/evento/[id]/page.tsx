import EventDetail from "@/components/event/EventDetail";
import Banner from "@/components/generic/Banner";
import simpleFetch from "src/utils/simpleFetch";
import { Event } from "src/interfaces";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventoShow({ params }: Props) {
  const event: Event = await simpleFetch(`events/${params.id}`, "ssr");
  return (
    <>
      <Banner
        banner_url="https://i.imgur.com/uuTQw6t.png"
        text=""
        position="center"
      ></Banner>
      <div
        className="container mt-5 mb-5 pt-md-5 pb-md-5 js-fee"
        data-fee={event.fee}
      >
        {event !== undefined && <EventDetail event={event}></EventDetail>}
      </div>
    </>
  );
}
