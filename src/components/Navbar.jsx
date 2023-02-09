import React from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-custom" id="header">
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          width="auto"
          height="50"
          className="d-inline-block align-center"
          alt=""
        ></img>
        <strong>Igrice</strong>
      </Link>
      <div>
        <Link to="/" className="nav-link">
          Pocetna
        </Link>
        <Link to="/omiljeno" className="nav-link">
          Omiljene igre
        </Link>
        <Link to="/novaigra" className="nav-link">
          Dodaj novu igru
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
