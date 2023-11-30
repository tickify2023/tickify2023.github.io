"use client";
import React, { useEffect } from "react";

export const NavFn = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.getElementById("navbar") as HTMLElement;
    if (navbar) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        navbar.classList.add("fixed-header");
      } else {
        navbar.classList.remove("fixed-header");
      }
    }
  };

  return <></>;
};
