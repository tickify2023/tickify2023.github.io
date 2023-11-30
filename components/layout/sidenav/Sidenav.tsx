import React from "react";
import { SideLink } from "./SideLink";
import { Logout } from "@/components/login/Logout";
import {
  FaList,
  FaStar,
  FaSignal,
  FaMoneyCheckAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import { BlockUrl } from "@/components/login/BlockUrl";
import Link from "next/link";

const sideLinks = [
  {
    direction: "/admin",
    icon: <FaList />,
    text: "Eventos",
  },
  {
    direction: "/admin/administradores",
    icon: <FaStar />,
    text: "Administradores",
  },
  {
    direction: "/admin/manual",
    icon: <FaMoneyCheckAlt />,
    text: "Venta Manual",
  },
  {
    direction: "/admin/estadisticas",
    icon: <FaSignal />,
    text: "Estadisticas",
  },
];

const Sidenav: any = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <BlockUrl></BlockUrl> */}
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            Admin Panel
          </a>
          <div
            className="offcanvas offcanvas-end "
            tabIndex={-1}
            id="navbarResponsive"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body align-self-md-end ">
              <ul className="navbar-nav d-none d-md-flex">
                {/* <li className="nav-item">
                  <a className="nav-link" href="/admin">
                    <FaUser />
                    &nbsp;Admin
                  </a>
                </li> */}
                <li className="nav-item">
                  <Logout desc={"nav-link"}></Logout>
                </li>
              </ul>

              <ul className="list-unstyled fw-normal small d-sm-block d-md-none">
                {/* <li>
                  <Link
                    className="bd-links-link d-inline-block rounded"
                    href="/admin"
                  >
                    <FaUser />
                    &nbsp;Admin
                  </Link>
                </li> */}
                {sideLinks.map((link) => (
                  <SideLink
                    key={link.text}
                    direction={link.direction}
                    text={link.text}
                    icon={link.icon}
                    classes="bd-links-link d-inline-block rounded"
                  />
                ))}
                <li>
                  <Logout
                    desc={"bd-links-link d-inline-block rounded"}
                  ></Logout>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid row p-0">
        <div className="col-md-4 col-lg-3 d-none d-md-block">
          <div id="sidebar">
            <div className="container-fluid tmargin">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-default text-white border border-white"
                    aria-label="Search"
                  >
                    <FaSearch />
                  </button>
                </span>
              </div>
            </div>
            <ul className="nav navbar-nav side-bar mt-3">
              {sideLinks.map((link) => (
                <SideLink
                  key={link.text}
                  direction={link.direction}
                  icon={link.icon}
                  text={link.text}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-8 col-lg-9 p-lg-0 animated bounce">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidenav;
