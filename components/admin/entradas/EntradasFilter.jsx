"use client";
import React, { useRef, useState } from "react";
import { EntradasTable } from "./EntradadasTable";
import { Html5Qrcode } from "html5-qrcode";

export const EntradasFilter = ({ entradas }) => {
  const [filteredEntradas, setFilteredEntradas] = useState(entradas);
  const [scannedCode, setScannedCode] = useState(null);
  const [scanner, setScanner] = useState(null);
  const filterBarCodeRef = useRef(null);

  const filterByCode = (code) => {
    setFilteredEntradas(
      entradas.filter((entrada) => entrada.code.includes(code))
    );
  };

  const startScanner = () => {
    const qrCodeScanner = new Html5Qrcode("preview", /* verbose= */ false);
    const config = { facingMode: "environment" }; // add camera configuration
    qrCodeScanner.start(
      config, // pass camera configuration object
      (code) => {
        setScannedCode(code);
        filterByCode(code);
        qrCodeScanner.stop();
        filterBarCodeRef.current.value = code;
      },
      (errorMessage) => {
        console.error("27", errorMessage);
        filterByCode(errorMessage);
        filterBarCodeRef.current.value = code;
      },
      /* fps= */ 10,
      /* qrbox= */ 250
    );
    setScanner(qrCodeScanner);
    console.log("scanner started");
  };

  const stopScanner = () => {
    scanner && scanner.stop();
    setScanner(null);
  };

  const handleScannerClick = () => {
    if (scanner) {
      stopScanner();
    } else {
      startScanner();
    }
  };

  return (
    <>
      <div id="preview"></div>
      <p>{scannedCode}</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="filterBarCode"
          ref={filterBarCodeRef}
          placeholder="Buscar por código"
          onChange={(e) => filterByCode(e.target.value)}
        ></input>
        <button className="btn btn-dark btn-small" onClick={handleScannerClick}>
          {scanner ? "Detener" : "Escanear"}
        </button>
      </div>
      <EntradasTable entradas={filteredEntradas}></EntradasTable>
    </>
  );
};
