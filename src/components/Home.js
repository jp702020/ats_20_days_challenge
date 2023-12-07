import React from "react";
import "./Home.css";
import logo from "../assets/storeCode.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="center">
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
        <div className="center-1"></div>
        <div className="content">
          <h4>Shop with</h4>
          <h2>STORECODE</h2>
          <input className="search_bar" placeholder="ENTER PRODUCT CODE" />
          <br />
          <button className="btn btn-primary btn-lg">Search</button>
        </div>
        <div className="get_code_box">
          <div>
            <h5>Get a code for your link</h5>
            <div className="get_code">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    GET CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
