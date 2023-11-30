import React from "react";

const Banner = ({ banner_url = "", text = "", position = "center" }) => {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${banner_url})`,
        }}
      >
        <h2 className={position === "center" ? "text-center" : ""}>{text}</h2>
      </section>
    </>
  );
};

export default Banner;
