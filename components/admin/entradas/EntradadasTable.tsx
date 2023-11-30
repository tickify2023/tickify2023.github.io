import React from "react";
import { EntradaTr } from "./EntradaTr";
import { ClientTicket } from "src/interfaces";

export const EntradasTable = ({ entradas }: { entradas: ClientTicket[] }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="text-center">Código</th>
          <th>Tipo de entrada</th>
          <th className="text-center">Valido</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {entradas.map((entrada) => (
          <EntradaTr key={entrada.id} entrada={entrada} />
        ))}
      </tbody>
    </table>
  );
};
