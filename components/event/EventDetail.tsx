"use client";
import React, { useState } from "react";
import { Event } from "../../src/interfaces/index";
import { EventForm } from "./EventForm";
import { ImgMap } from "./ImgMap";

function EventDetail({
  event,
  manual = false,
}: {
  event: Event;
  manual?: boolean;
}) {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="event row gap-3 gap-md-1">
      <div className="product-img col-12 col-md-5 col-lg-4">
        <ImgMap
          img={event.image}
          handleToggle={handleToggle}
          showMap={showMap}
        />
      </div>
      <EventForm event={event} manual={manual} handleToggle={handleToggle} />
    </div>
  );
}

export default EventDetail;
