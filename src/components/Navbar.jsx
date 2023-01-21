import React from "react";
import logo from "../img/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-custom" id="header">
      <a className="navbar-brand" href="">
        <img
          src={logo}
          width="auto"
          height="50"
          className="d-inline-block align-center"
          alt=""
        ></img>
        <strong>Igrice</strong>
      </a>
      <div>
        <a className="nav-link" href="">
          Pocetna
        </a>
        <a className="nav-link" href="">
          Dodaj novu igru
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
