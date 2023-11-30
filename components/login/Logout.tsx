"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { FaGlobe } from "react-icons/fa";

export const Logout: any = ({ desc = "" }: { desc: string }) => {
  const logout = (e: any) => {
    e.preventDefault();
    signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <a className={desc} onClick={(e) => logout(e)} href="#">
      <FaGlobe />
      &nbsp;Cerrar Sesión
    </a>
  );
};
