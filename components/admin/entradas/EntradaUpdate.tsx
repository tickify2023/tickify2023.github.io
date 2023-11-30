"use client";
import React from "react";
import simpleFetch from "src/utils/simpleFetch";

interface update {
  updated: boolean;
}

export const EntradaUpdate = ({ id }: { id: number }) => {
  const updateEntrada = async () => {
    const update: update = await simpleFetch(`entradas/${id}`, "ssr");
    console.log(update);
    if (update.updated) {
      alert("Entrada usada");
      location.reload();
    } else {
      alert("Error al usar la entrada");
    }
  };

  return (
    <button className="btn btn-dark btn-sm" onClick={() => updateEntrada()}>
      Usar
    </button>
  );
};
