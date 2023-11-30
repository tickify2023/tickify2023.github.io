"use client";
import React from "react";

export const EventToggle = ({ id, active }) => {
  const toggleEvent = async () => {
    const fn = await fetch(`/api/events/${id}/toggle`);
    location.reload();
  };

  return (
    <span
      className={active ? "badge text-bg-success" : "badge text-bg-secondary"}
      role="button"
      onClick={() => toggleEvent()}
    >
      {active ? "Activo" : "Inactivo"}
    </span>
  );
};
