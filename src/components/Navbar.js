import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const header = () => {
  return (
    <>
      <nav>
        <ul className="sidebar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contect</a>
          </li>
        </ul>
      </nav>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ATS20Day
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link " to="/about">
                About us
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default header;
