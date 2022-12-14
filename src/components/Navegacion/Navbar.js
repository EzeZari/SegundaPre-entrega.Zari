import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStore} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <FontAwesomeIcon style={{ 
          color: "white",
          height: "25px",
          padding: "6px" } } icon={faStore}/>
          <Link className="navbar-brand" to="/">
            Tienda Zari{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/?category=botines">
                  Botines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/?category=Zapatilla">
                  Zapatillas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
