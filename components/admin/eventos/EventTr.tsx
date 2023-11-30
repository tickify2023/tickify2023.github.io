import Link from "next/link";
import React from "react";
import { Event } from "src/interfaces";
import { EventToggle } from "./EventToggle";
import { dateShortFormat } from "src/utils/dateFormat";

export const EventTr = ({
  event,
  manual = false,
}: {
  event: Event;
  manual?: boolean;
}) => {
  const formatedDate = dateShortFormat(`${event.date}`);

  return (
    <tr>
      <td className="text-center">{event.id}</td>
      <td width="60%">{event.name}</td>
      <td className="text-center" width="10%">
        {formatedDate}
      </td>
      {manual === false && (
        <td className="text-center" width="10%">
          <EventToggle id={event.id} active={event.active} />
        </td>
      )}
      <td>
        <span className="label label-info">
          <span className="glyphicon glyphicon-time">&nbsp;</span>
          {manual === false ? (
            <Link href={`/admin/eventos/${event.id}`}>Ver</Link>
          ) : (
            <Link href={`/admin/manual/${event.id}`}>Ver</Link>
          )}
        </span>
      </td>
    </tr>
  );
};
