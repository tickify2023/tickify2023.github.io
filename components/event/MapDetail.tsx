import React, { FC } from "react";

interface MapDetailProps {
  src: string;
}

export const MapDetail: FC<MapDetailProps> = ({ src }) => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        {/* <iframe className="gmap_iframe" width="100%" src={src} /> */}
        <iframe
          className="gmap_iframe"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?hl=en&q=la meseta san juan&t=&z=16&ie=UTF8&iwloc=B&output=embed"
        />
      </div>
      <style>
        {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 100%;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none!important;
            width: 100%;
            height: 100%;
          }
          .gmap_iframe {
            height: 100%!important;
          }
          @media (max-width: 768px) {
            .mapouter {
              min-height: 40vh;
            }
          }
        `}
      </style>
    </div>
  );
};
