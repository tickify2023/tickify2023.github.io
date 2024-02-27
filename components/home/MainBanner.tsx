//Este módulo se exporta, es el banner principal de la página home
import React from "react";

export const MainBanner = () => {
  return (
    
      <div
      style={{backgroundColor: "black"}} 
      className="mainBanner">
         
        
        <div>
          <h1></h1>
          <h1 className="yellow">Exclusivos</h1>
          {/* <p>La Meseta</p> */}

          <div
          ><a 
          href="#sec-events">
           <button className="btn-action">Ver eventos</button>
          </a>
          </div>
        </div>
      </div>
    
  );
};
