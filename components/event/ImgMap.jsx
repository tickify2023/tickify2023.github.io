import React from "react";
import { MapDetail } from "./MapDetail";

export const ImgMap = ({ img, showMap, handleToggle }) => {
  return (
    <>
      {showMap ? (
        <MapDetail src={img} />
      ) : (
        <img src={img} className="img-fluid" onClick={handleToggle} />
      )}
    </>
  );
};
