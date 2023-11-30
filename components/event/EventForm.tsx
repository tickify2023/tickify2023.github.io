import React, { useState } from "react";
import { Event, Ticket } from "src/interfaces";
import { EventDescription } from "./EventDescription";
import { UserForm } from "./UserForm";

export const EventForm = ({
  event,
  manual = false,
  handleToggle,
}: {
  event: Event;
  manual?: boolean;
  handleToggle: any;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const tickets: Ticket[] = event.tickets || [];

  return (
    <>
      {!toggle ? (
        <EventDescription
          event={event}
          setToggle={setToggle}
          handleToggle={handleToggle}
        />
      ) : (
        <UserForm tickets={tickets} setToggle={setToggle} manual={manual} />
      )}
    </>
  );
};
