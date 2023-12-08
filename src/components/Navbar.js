import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/storeCode.png";

const header = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <div className="nav_div1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>

            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="nav_div1">
            <div>
              <button className="nav_btn">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgba(135, 207, 235, 0.725);",
                  }}
                  to={"/login"}
                >
                  Login
                </Link>
              </button>
            </div>
            <div>
              <button className="nav_btn">
                <Link
                  style={{ textDecoration: "none", color: "red" }}
                  to={"/signup"}
                >
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* <ul className="sidebar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contect</a>
          </li>
        </ul> */}
      </nav>
    </>
  );
};

export default header;
