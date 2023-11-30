"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const SideLink = ({ direction, icon, text, classes = "" }: any) => {
  // get the session from next auth and check if the user is role vendedor
  const { data: session } = useSession();
  const user: any = session?.user;
  if (user?.role === "Vendedor" && direction !== "/admin/manual") {
    return <></>;
  }

  if (
    user?.role === "Vendedor" &&
    window.location.pathname.includes("manual") === false
  ) {
    window.location.href = "/admin/manual";
  }

  const closeModal = () => {
    const btn: HTMLButtonElement | null = document.querySelector(
      ".offcanvas.offcanvas-end.show .btn-close"
    );
    btn?.click();
  };

  return (
    <li>
      <Link href={direction} className={classes} onClick={() => closeModal()}>
        {icon}
        &nbsp;{text}
      </Link>
    </li>
  );
};
