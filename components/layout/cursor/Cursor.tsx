"use client";
import React, { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current;
      if (cursor) {
        const posX = clientX - cursor.offsetWidth / 2;
        const posY = clientY - cursor.offsetHeight / 2;
        setTimeout(() => {
          cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        }, 100);
      }
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor-shadow"></div>
    </div>
  );
}

export default Cursor;
