"use client";
import React from "react";

export const Faq = ({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id: string;
}) => {
  return (
    <div className="accordion-item custom-accordion">
      <h3 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {title}
        </button>
      </h3>
      <div id={id} className="accordion-collapse collapse ">
        <div className="accordion-body">{text}</div>
      </div>
    </div>
  );
};
