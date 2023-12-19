import EventDetail from "@/components/event/EventDetail";
import simpleFetch from "src/utils/simpleFetch";
import { Event } from "src/interfaces";
import React from 'react';
import { ThemeConfig } from "config/theme.config";
//import { fondo } from "./src/app/fondoNegro.css";
interface Props {
  params: {
    id: string;
  };
}

export default async function EventoShow({ params }: Props) {
  const event: Event = await simpleFetch(`events/${params.id}`, "ssr");
  return (
    
    <>
      <div background-color="black" className="container mt-5 mb-5 pt-md-5 pb-md-5">
        {event !== undefined && (
          <EventDetail event={event} manual={true}></EventDetail>
        )}
      </div>
    </>
    
  );
}
