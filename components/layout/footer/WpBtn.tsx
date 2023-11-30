import React from "react";

const WpBtn = () => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=+5492644572627&text=Me%20interesa%20saber%20mas%20sobre%20los%20conciertos"
      >
        <div
          className="wp"
          style={{
            backgroundImage: "url(/imgs/logos/wp.png)",
          }}
        ></div>
      </a>
    </>
  );
};

export default WpBtn;
