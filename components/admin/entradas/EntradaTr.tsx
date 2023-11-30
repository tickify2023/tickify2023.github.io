import Link from "next/link";
import React from "react";
import { ClientTicket } from "src/interfaces";
import { EntradaUpdate } from "./EntradaUpdate";

export const EntradaTr = ({ entrada }: { entrada: ClientTicket }) => {
  return (
    <tr>
      <td className="text-center">{entrada.code}</td>
      <td width="60%">{entrada.type}</td>
      <td className="text-center" width="10%">
        {entrada.used ? "No" : "Si"}
      </td>
      <td>
        {entrada.used ? (
          <button className="btn btn-dark btn-sm" disabled>
            Usar
          </button>
        ) : (
          <EntradaUpdate id={entrada.id}></EntradaUpdate>
        )}
      </td>
    </tr>
  );
};
