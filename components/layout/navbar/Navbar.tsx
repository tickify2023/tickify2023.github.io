import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand hover-underline-animation" href="/">
          <img
            src="/imgs/logos/logo-no-bg.png"
            alt="logo"
            className="logo-no-bg"
            style={{
              height: "3rem",
            }}
          ></img>
          Tickify
        </Link>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link active hover-underline-animation"
                  aria-current="page"
                  href="/"
                >
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-underline-animation"
                  href="nosotros"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-underline-animation"
                  href="/contacto"
                >
                  Contacto
                </Link>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link hover-underline-animation" href="#">
                  <FaFacebookF size={20} />
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  target="_blank"
                  className="nav-link hover-underline-animation"
                  href="https://www.instagram.com/tickify.ar/"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
